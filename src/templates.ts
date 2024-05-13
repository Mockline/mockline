import { addTemplate, addTypeTemplate } from '@nuxt/kit'
import { kebabCase } from 'scule'
import type { Nuxt } from '@nuxt/schema'
import type { ModuleOptions } from './module'
import { colors, canvasColors } from './runtime/colors'
import * as theme from './theme'

export function addTemplates(options: ModuleOptions, nuxt: Nuxt) {
  const shades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const template = addTemplate({
    filename: 'tailwind.css',
    write: true,
    getContents: () => `@import "tailwindcss";
${generateRadixImports()}

@layer base {
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes scaleOut {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.95); }
  }
  @keyframes enterFromRight {
    from { opacity: 0; transform: translateX(200px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes enterFromLeft {
    from { opacity: 0; transform: translateX(-200px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes exitToRight {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(200px); }
  }
  @keyframes exitToLeft {
    from { opacity: 1; transform: translateX(0); }
    to { opacity: 0; transform: translateX(-200px); }
  }
}

@theme {
  ${colors.map(color =>
      shades.map(shade => `--color-${color}-${shade}: var(--${color}-${shade});`).join('\n\t')
    ).join('\n\t')}
  ${shades.map(shade => `--color-canvas-${shade}: var(--canvas-${shade});`).join('\n\t')}
}
`
  })

  nuxt.options.css.unshift(template.dst)

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
  return colors.filter(color => color !== 'primary')
    .flatMap(color => suffixes.map(suffix => `@import "@radix-ui/colors/${color}${suffix}.css";`))
    .join('\n')
}

function generateColorTypes() {
  return `
    export type CanvasColor = '${canvasColors.join('\' | \'')}';
    export type Color = GrayColor | '${colors.join('\' | \'')}';
    export const canvasColors: CanvasColor[] = ${JSON.stringify(canvasColors)};
    export const colors: Color[] = ${JSON.stringify(colors)};`
}
