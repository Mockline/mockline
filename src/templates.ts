import { addTemplate, addTypeTemplate } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { Config } from 'tailwindcss'
import type { ModuleOptions } from './module'
import { colors, grayColors, colorsAsRegex, generateScale } from './runtime/colors'

export function addTemplates(options: ModuleOptions, nuxt: Nuxt) {
  nuxt.hook('tailwindcss:config', (tailwindConfig: Config) => {
    tailwindConfig.theme = tailwindConfig.theme || {}
    tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
    tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {}

    tailwindConfig.theme.extend.colors = {
      ...tailwindConfig.theme.extend.colors,
      ...colors.reduce((acc: Record<string, Record<string, string>>, color) => {
        acc[color] = generateScale(color)
        return acc
      }, {}),
    }

    tailwindConfig.safelist = tailwindConfig.safelist || []
    // we want to safelist every color and its alpha variants so all the related classes are generated
    // we want to use pattern like `bg-iris-10` and `bg-iris-a10` or `text-iris-10` and `text-iris-a10` and number from 1 to 12
    // add also primary to safelist
    tailwindConfig.safelist.push(
      {
        pattern: new RegExp(`^bg-(${colorsAsRegex(colors)})-(a)?(1[0-2]|[1-9])$`),
        variants: ['hover', 'focus', 'active', 'group-hover'],
      },
      {
        pattern: new RegExp(`^text-(${colorsAsRegex(colors)})-(a)?(1[0-2]|[1-9])$`),
        variants: ['hover', 'focus', 'active', 'group-hover'],
      },
      {
        pattern: new RegExp(`^border-(${colorsAsRegex(colors)})-(a)?(1[0-2]|[1-9])$`),
        variants: ['hover', 'focus', 'active', 'group-hover'],
      },
      {
        pattern: new RegExp(`^ring-(${colorsAsRegex(colors)})-(a)?(1[0-2]|[1-9])$`),
        variants: ['hover', 'focus', 'active', 'group-hover'],
      },
      {
        pattern: new RegExp(`^bg-primary-(a)?(1[0-2]|[1-9])$`),
        variants: ['hover', 'focus', 'active', 'group-hover'],
      },
      {
        pattern: new RegExp(`^text-primary-(a)?(1[0-2]|[1-9])$`),
        variants: ['hover', 'focus', 'active', 'group-hover'],
      },
      {
        pattern: new RegExp(`^border-primary-(a)?(1[0-2]|[1-9])$`),
        variants: ['hover', 'focus', 'active', 'group-hover'],
      },
      {
        pattern: new RegExp(`^ring-primary-(a)?(1[0-2]|[1-9])$`),
        variants: ['hover', 'focus', 'active', 'group-hover'],
      }
    )

    tailwindConfig.theme.extend.colors.primary = {
      1: 'var(--color-primary-1)',
      2: 'var(--color-primary-2)',
      3: 'var(--color-primary-3)',
      4: 'var(--color-primary-4)',
      5: 'var(--color-primary-5)',
      6: 'var(--color-primary-6)',
      7: 'var(--color-primary-7)',
      8: 'var(--color-primary-8)',
      9: 'var(--color-primary-9)',
      10: 'var(--color-primary-10)',
      11: 'var(--color-primary-11)',
      12: 'var(--color-primary-12)',
      DEFAULT: 'var(--color-primary-9)',
    }
  })

  const colorsWithoutPrimary = colors.filter(color => color !== 'primary')

  const template = addTemplate({
    filename: 'radix-colors.css',
    write: true,
    getContents: () => `/* Generated by mockline */
${ colorsWithoutPrimary.map(color => `@import "@radix-ui/colors/${ color }.css";`).join('\n') }
${ colorsWithoutPrimary.map(color => `@import "@radix-ui/colors/${ color }-alpha.css";`).join('\n') }
${ colorsWithoutPrimary.map(color => `@import "@radix-ui/colors/${ color }-dark.css";`).join('\n') }
${ colorsWithoutPrimary.map(color => `@import "@radix-ui/colors/${ color }-dark-alpha.css";`).join('\n') }
    `
  })

  nuxt.options.css.unshift(template.dst)

  addTypeTemplate({
    filename: 'types/colors.d.ts',
    getContents: () => `// Generated by mockline
    export type GrayColor = '${ grayColors.join('\' | \'') }'
    export type Color = GrayColor | '${ colors.join('\' | \'') }'
    export const grayColors: GrayColor[] = ${ JSON.stringify(grayColors) }
    export const colors: Color[] = ${ JSON.stringify(colors) }`
  })

  addTypeTemplate({
    filename: 'types/ui.d.ts',
    getContents: () => `// Generated by mockline
      declare module 'nuxt/schema' {
        type AppConfigInput = {
          mockline?: AppConfigMockline
        }
      }
      declare module '@nuxt/schema' {
        type AppConfigInput = {
          mockline?: AppConfigMockline
        }
      }`
  })
}
