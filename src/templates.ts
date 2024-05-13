import { addTemplate, addTypeTemplate, useNuxt } from '@nuxt/kit'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss'
import { kebabCase } from 'scule'
import type { ModuleOptions } from './module'
import { colors, generateScale, type Color, canvasColors } from './runtime/colors'
import * as theme from './theme'

export function addTemplates(options: ModuleOptions, nuxt = useNuxt()) {
  nuxt.hook('tailwindcss:config', (tailwindConfig) => {
    initThemeColors(tailwindConfig)
    initAnimations(tailwindConfig)

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

function initThemeColors(tailwindConfig: Partial<Config>) {
  tailwindConfig.theme = tailwindConfig.theme || {}
  tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
  tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {}

  const defaultColors = ['primary', 'canvas', ...colors]
  defaultColors.forEach(color => {
    (tailwindConfig.theme!.extend!.colors as {[key: string]: any})[color] = generateScale(color as Color)
  })
}

function initAnimations(tailwindConfig: Partial<Config>) {
  tailwindConfig.theme = tailwindConfig.theme || {}
  tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
  tailwindConfig.theme.extend.keyframes = tailwindConfig.theme.extend.keyframes || {}
  tailwindConfig.plugins = tailwindConfig.plugins || []
  tailwindConfig.theme.extend.keyframes = {
    enterFromRight: {
      from: { opacity: '0', transform: 'translateX(200px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
    enterFromLeft: {
      from: { opacity: '0', transform: 'translateX(-200px)' },
      to: { opacity: '1', transform: 'translateX(0)' },
    },
    exitToRight: {
      from: { opacity: '1', transform: 'translateX(0)' },
      to: { opacity: '0', transform: 'translateX(200px)' },
    },
    exitToLeft: {
      from: { opacity: '1', transform: 'translateX(0)' },
      to: { opacity: '0', transform: 'translateX(-200px)' },
    },
    scaleIn: {
      from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
      to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
    },
    scaleOut: {
      from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
      to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
    },
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
  }
  tailwindConfig.theme.extend.animation = {
    scaleIn: 'scaleIn 200ms ease',
    scaleOut: 'scaleOut 200ms ease',
    fadeIn: 'fadeIn 200ms ease',
    fadeOut: 'fadeOut 200ms ease',
    enterFromLeft: 'enterFromLeft 250ms ease',
    enterFromRight: 'enterFromRight 250ms ease',
    exitToLeft: 'exitToLeft 250ms ease',
    exitToRight: 'exitToRight 250ms ease',
  }
  // @ts-ignore
  tailwindConfig.plugins.push(plugin(({ matchUtilities }) => {
    matchUtilities({
      perspective: value => ({
        perspective: value,
      }),
    })
  }))
}

function addColorPatternsToSafeList(tailwindConfig: Partial<Config>, variants: string[], classes: string[]) {
  tailwindConfig.safelist = tailwindConfig.safelist || []

  const patterns = ['primary', 'canvas', ...colors].flatMap(color =>
    classes.map(type => ({
      pattern: new RegExp(`^${type}-${color}-(a)?(1[0-2]|[1-9])$`),
      variants
    }))
  )

  tailwindConfig.safelist.push(...patterns)
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
