import { fileURLToPath } from 'node:url'
import { addTemplate, addTypeTemplate, useNuxt } from '@nuxt/kit'
import { kebabCase } from 'scule'
import { colors, availableColors } from './runtime/utils/colors'
import * as theme from './theme'
import type { ModuleOptions } from './runtime/types'

export function addTemplates(options: ModuleOptions, nuxt = useNuxt()): void {
  const template = addTemplate({
    filename: 'radix-colors.css',
    write: true,
    getContents: () => generateRadixImports()
  })

  addTypeTemplate({
    filename: 'types/colors.d.ts',
    getContents: () => generateColorTypes()
  })

  nuxt.options.css.unshift(template.dst)

  for (const component in theme) {
    addTemplate({
      filename: `mockline/${ kebabCase(component) }.ts`,
      write: true,
      getContents: () => {
        const template = (theme as any)[component]
        const result = typeof template === 'function' ? template(options) : template

        const variants = Object.keys(result.variants || {})

        let json = JSON.stringify(result, null, 2)

        for (const variant of variants) {
          json = json.replace(new RegExp(`("${variant}": "[^"]+")`, 'g'), '$1 as const')
          json = json.replace(new RegExp(`("${variant}": \\[\\s*)((?:"[^"]+",?\\s*)+)(\\])`, 'g'), (_, before, match, after) => {
            const replaced = match.replace(/("[^"]+")/g, '$1 as const')
            return `${ before }${ replaced }${ after }`
          })
        }

        // For local development, directly import from theme
        if (process.env.DEV) {
          return [
            `import template from ${ JSON.stringify(fileURLToPath(new URL(`./theme/${ kebabCase(component) }`, import.meta.url))) }`,
            `const result = typeof template === 'function' ? template(${ JSON.stringify(options) }) : template`,
            `export default result`,
            `/* export default ${ json } */`
          ].join('\n')
        }

        return `export default ${ json }`
      }
    })
  }

  addTemplate({
    filename: 'mockline/index.ts',
    write: true,
    getContents: () => Object.keys(theme).map(component => `export { default as ${component} } from './${kebabCase(component)}'`).join('\n')
  })

  addTypeTemplate({
    filename: 'types/mockline.d.ts',
    getContents: () => `
      import * as mockline from '#build/mockline'
      import type { DeepPartial } from '#mockline/types/utils'

      type Color = '${colors.join('\' | \'')}';
      const colors = ${JSON.stringify(options.colors)} as const;

      type MocklineConfig = {
        primary?: Color
        canvas?: Color
      } & DeepPartial<typeof mockline>

      declare module 'nuxt/schema' {
        interface AppConfigInput {
          mockline?: MocklineConfig
        }
      }
      declare module '@nuxt/schema' {
        interface AppConfigInput {
          mockline?: MocklineConfig
        }
      }
      export {}`
  })
}

function generateRadixImports(): string {
  const suffixes = ['', '-alpha', '-dark', '-dark-alpha']
  return colors.filter(color => color !== 'primary' && color !== 'canvas')
    .flatMap(color => suffixes.map(suffix => `@import "@radix-ui/colors/${color}${suffix}.css";`))
    .join('\n')
}

function generateColorTypes(): string {
  return `
    export type Color = '${colors.join('\' | \'')}';
    export const colors: Color[] = ${JSON.stringify(colors)};`
}
