import { addTemplate, createResolver, installModule, useNuxt } from '@nuxt/kit'
import type { ModuleOptions } from '@nuxt/schema'
import { defu } from 'defu'
import { join } from 'pathe'
import { colors, generateScale } from './runtime/colors'

export async function installTailwind(options: ModuleOptions, nuxt = useNuxt(), resolve = createResolver(import.meta.url).resolve) {
  const runtimeDir = resolve('./runtime')

  await installModule('@nuxtjs/tailwindcss', defu({
    exposeConfig: true,
    configPath: [
      addTemplate({
        filename: 'mockline-tailwind.config.cjs',
        write: true,
        getContents: () => {
          return `
            const { generateColorSafelist } = require(${JSON.stringify(resolve(runtimeDir, 'colors'))})
            import plugin, { type Config } from 'tailwindcss';
            import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';

            module.exports = {
              darkMode: 'class',
              safelist: generateColorSafelist(),
              content: {
                files: [
                  ${JSON.stringify(resolve(runtimeDir, 'components/**/*.{vue,mjs,ts}'))},
                  ${JSON.stringify(resolve(runtimeDir, '*.{mjs,js,ts}'))},
                ],
              },
              theme: {
                extend: {
                  colors: {
                    primary: ${JSON.stringify(generateScale('primary'))},
                    canvas: ${JSON.stringify(generateScale('canvas'))},
                    ${colors.map(color => `${color}: ${JSON.stringify(generateScale(color))}`).join(',\n')}
                  },
                  keyframes: {
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
                  },
                  animation: {
                    scaleIn: 'scaleIn 200ms ease',
                    scaleOut: 'scaleOut 200ms ease',
                    fadeIn: 'fadeIn 200ms ease',
                    fadeOut: 'fadeOut 200ms ease',
                    enterFromLeft: 'enterFromLeft 250ms ease',
                    enterFromRight: 'enterFromRight 250ms ease',
                    exitToLeft: 'exitToLeft 250ms ease',
                    exitToRight: 'exitToRight 250ms ease',
                  },
                },
              },
              plugins: [
                plugin(({ matchUtilities }) => {
                  matchUtilities({
                    perspective: value => ({
                      perspective: value,
                    }),
                  });
                }),
                require('@tailwindcss/forms')({ strategy: 'class' }),
                require('@tailwindcss/aspect-ratio'),
                require('@tailwindcss/typography'),
                require('@tailwindcss/container-queries'),
                iconsPlugin(${Array.isArray(options.icons) ? `{ collections: getIconCollections(${JSON.stringify(options.icons)}) }` : typeof options.icons === 'object' ? JSON.stringify(options.icons) : '{}'}),
              ],
            };
          `
        },
      }).dst,
      join(nuxt.options.rootDir, 'tailwind.config'),
    ],
  }, nuxt.options.tailwindcss))
}
