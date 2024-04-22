import { addTemplate, addTypeTemplate, useNuxt } from '@nuxt/kit'
import type { Config } from 'tailwindcss'
import type { ModuleOptions } from './module'
import { colors, grayColors, generateScale, type Color } from './runtime/colors'

export function addTemplates(options: ModuleOptions, nuxt = useNuxt()) {
  nuxt.hook('tailwindcss:config', (tailwindConfig: Config) => {
    tailwindConfig.theme = tailwindConfig.theme || {}
    tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
    tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {}

    const defaultColors = ['primary', ...colors]
    defaultColors.forEach(color => {
      tailwindConfig.theme.extend.colors[color] = generateScale(color as Color)
    })

    const variants = ['hover', 'focus', 'active', 'group-hover']
    const colorPatterns = defaultColors.flatMap(color =>
      ['bg', 'text', 'border', 'ring'].map(type => ({
        pattern: new RegExp(`^${type}-${color}-(a)?(1[0-2]|[1-9])$`),
        variants
      }))
    )

    tailwindConfig.safelist = tailwindConfig.safelist || []
    tailwindConfig.safelist.push(...colorPatterns)
  })

  const colorsWithoutPrimary = colors.filter(color => color !== 'primary' && color !== 'gray')
  const constructImports = (type: string) => colorsWithoutPrimary.map(color => `@import "@radix-ui/colors/${color}${type}.css";`).join('\n')

  const template = addTemplate({
    filename: 'radix-colors.css',
    write: true,
    getContents: () => [...Array(4).keys()].map(idx => constructImports(['', '-alpha', '-dark', '-dark-alpha'][idx])).join('\n')
  })

  addTypeTemplate({
    filename: 'types/colors.d.ts',
    getContents: () => `export type GrayColor = '${grayColors.join('\' | \'')}';
export type Color = GrayColor | '${colors.join('\' | \'')}';
export const grayColors: GrayColor[] = ${JSON.stringify(grayColors)};
export const colors: Color[] = ${JSON.stringify(colors)};`
  })

  nuxt.options.css.unshift(template.dst)
}
