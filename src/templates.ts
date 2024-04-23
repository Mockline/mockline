import { addTemplate, addTypeTemplate, useNuxt } from '@nuxt/kit'
import type { Config } from 'tailwindcss'
import type { ModuleOptions } from './module'
import { colors, grayColors, generateScale, type Color } from './runtime/colors'

export function addTemplates(options: ModuleOptions, nuxt = useNuxt()) {
  nuxt.hook('tailwindcss:config', (tailwindConfig) => {
    initThemeColors(tailwindConfig)

    const variants = ['hover', 'focus', 'active', 'group-hover']
    const classes = ['bg', 'text', 'border', 'ring']
    addColorPatternsToSafeList(tailwindConfig, variants, classes)
  })

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
        gray?: Color
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

function initThemeColors(tailwindConfig: Partial<Config>) {
  tailwindConfig.theme = tailwindConfig.theme || {}
  tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
  tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {}

  const defaultColors = ['primary', ...colors]
  defaultColors.forEach(color => {
    (tailwindConfig.theme!.extend!.colors as {[key: string]: any})[color] = generateScale(color as Color)
  })
}

function addColorPatternsToSafeList(tailwindConfig: Partial<Config>, variants: string[], classes: string[]) {
  tailwindConfig.safelist = tailwindConfig.safelist || []

  const patterns = ['primary', ...colors].flatMap(color =>
    classes.map(type => ({
      pattern: new RegExp(`^${type}-${color}-(a)?(1[0-2]|[1-9])$`),
      variants
    }))
  )

  tailwindConfig.safelist.push(...patterns)
}

function generateRadixImports() {
  const suffixes = ['', '-alpha', '-dark', '-dark-alpha']
  return colors.filter(color => color !== 'primary' && color !== 'gray')
    .flatMap(color => suffixes.map(suffix => `@import "@radix-ui/colors/${color}${suffix}.css";`))
    .join('\n')
}

function generateColorTypes() {
  return `
    export type GrayColor = '${grayColors.join('\' | \'')}';
    export type Color = GrayColor | '${colors.join('\' | \'')}';
    export const grayColors: GrayColor[] = ${JSON.stringify(grayColors)};
    export const colors: Color[] = ${JSON.stringify(colors)};`
}
