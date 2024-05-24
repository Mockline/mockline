import { addTemplate, addTypeTemplate, useNuxt } from '@nuxt/kit'
import { colors } from './runtime/utils/colors'

export function addTemplates(nuxt = useNuxt()): void {
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
