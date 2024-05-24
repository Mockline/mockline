import { addTemplate, addTypeTemplate, useNuxt } from '@nuxt/kit'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss'
import { kebabCase } from 'scule'
import { colors } from './runtime/colors'
import * as theme from './theme'

export function addTemplates(nuxt = useNuxt()) {
  const template = addTemplate({
    filename: 'radix-colors.css',
    write: true,
    getContents: () => generateRadixImports()
  })

  addTypeTemplate({
    filename: 'types/colors.d.ts',
    getContents: () => generateColorTypes()
  })

  addTypeTemplate({
    filename: 'types/mockline.d.ts',
    getContents: () => `
      type Color = '${colors.join('\' | \'')}';

      type MocklineConfig = {
        primary?: Color
        canvas?: Color
      }

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

  nuxt.options.css.unshift(template.dst)

  for (const component in theme) {
    addTemplate({
      filename: `components/${kebabCase(component)}.ts`,
      write: true,
      getContents: () => {
        const template = (theme as any)[component]
        const result = typeof template === 'function' ? template({ colors: colors }) : template

        const variants = Object.keys(result.variants || {})

        let json = JSON.stringify(result, null, 2)

        for (const variant of variants) {
          json = json.replace(new RegExp(`("${variant}": "[^"]+")`, 'g'), '$1 as const')
          json = json.replace(new RegExp(`("${variant}": \\[\\s*)((?:"[^"]+",?\\s*)+)(\\])`, 'g'), (_, before, match, after) => {
            const replaced = match.replace(/("[^"]+")/g, '$1 as const')
            return `${before}${replaced}${after}`
          })
        }

        return `export default ${json}`
      }
    })
  }

  addTemplate({
    filename: 'ui/index.ts',
    write: true,
    getContents: () => Object.keys(theme).map(component => `export { default as ${component} } from './${kebabCase(component)}'`).join('\n')
  })
}

function generateRadixImports() {
  const suffixes = ['', '-alpha', '-dark', '-dark-alpha']
  return colors.filter(color => color !== 'primary' && color !== 'canvas')
    .flatMap(color => suffixes.map(suffix => `@import "@radix-ui/colors/${color}${suffix}.css";`))
    .join('\n')
}

function generateColorTypes() {
  return `
    export type Color = '${colors.join('\' | \'')}';
    export const colors: Color[] = ${JSON.stringify(colors)};`
}
