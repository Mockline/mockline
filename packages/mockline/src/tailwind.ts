import { addTemplate, createResolver, installModule, useNuxt } from '@nuxt/kit'
import type { ModuleOptions } from '@nuxt/schema'
import { defu } from 'defu'
import { join } from 'pathe'
import { colors, generateScale } from './runtime/utils/colors'

/**
 * Install and configure TailwindCSS module.
 *
 * @param options - Module options provided by Nuxt.
 * @param nuxt - The Nuxt instance.
 * @param resolve - Resolver function.
 */
export async function installTailwind(options: ModuleOptions, nuxt = useNuxt(), resolve = createResolver(process.env.url).resolve): Promise<void> {
  const runtimeDir = resolve('./runtime')

  // Define the TailwindCSS configuration template
  const tailwindConfig = addTemplate({
    filename: 'mockline-tailwind.config.cjs',
    write: true,
    getContents: () => generateTailwindConfigContent(runtimeDir, options, resolve),
  }).dst

  // Install TailwindCSS module with custom options and configuration path
  await installModule('@nuxtjs/tailwindcss', defu({
    exposeConfig: true,
    configPath: [
      tailwindConfig,
      join(nuxt.options.rootDir, 'tailwind.config'),
    ],
  }, nuxt.options.tailwindcss))
}

/**
 * Generate the content of the TailwindCSS configuration file.
 *
 * @param runtimeDir - The runtime directory path.
 * @param options - Module options provided by Nuxt.
 * @param resolve - Resolver function.
 * @returns The content of the TailwindCSS configuration file.
 */
function generateTailwindConfigContent(runtimeDir: string, options: ModuleOptions, resolve: (...args: string[]) => string)
  : string {
  // Import required modules for TailwindCSS configuration
  return `
    const { generateColorSafelist } = require(${JSON.stringify(resolve(runtimeDir, 'utils', 'colors'))});
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
          keyframes: ${JSON.stringify(generateKeyframes())},
          animation: ${JSON.stringify(generateAnimations())},
        },
      },
      plugins: [
        plugin(({ matchUtilities }) => {
          matchUtilities({
            perspective: value => ({ perspective: value }),
          });
        }),
        require('@tailwindcss/forms')({ strategy: 'class' }),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
        iconsPlugin(${generateIconsPluginOptions(options)}),
      ],
    };
  `
}

type Transformations = {
  opacity?: string;
  transform?: string;
};

type Keyframes = {
  from: Transformations;
  to: Transformations;
};

/**
 * Generate keyframes for animations.
 *
 * @returns The keyframes configuration.
 */
function generateKeyframes(): Record<string, Keyframes> {
  return {
    enterFromRight: { from: { opacity: '0', transform: 'translateX(200px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
    enterFromLeft: { from: { opacity: '0', transform: 'translateX(-200px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
    exitToRight: { from: { opacity: '1', transform: 'translateX(0)' }, to: { opacity: '0', transform: 'translateX(200px)' } },
    exitToLeft: { from: { opacity: '1', transform: 'translateX(0)' }, to: { opacity: '0', transform: 'translateX(-200px)' } },
    scaleIn: { from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' }, to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' } },
    scaleOut: { from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' }, to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' } },
    fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
    fadeOut: { from: { opacity: '1' }, to: { opacity: '0' } },
  }
}

/**
 * Generate animations configuration.
 *
 * @returns The animations configuration.
 */
function generateAnimations(): Record<string, string> {
  return {
    scaleIn: 'scaleIn 200ms ease',
    scaleOut: 'scaleOut 200ms ease',
    fadeIn: 'fadeIn 200ms ease',
    fadeOut: 'fadeOut 200ms ease',
    enterFromLeft: 'enterFromLeft 250ms ease',
    enterFromRight: 'enterFromRight 250ms ease',
    exitToLeft: 'exitToLeft 250ms ease',
    exitToRight: 'exitToRight 250ms ease',
  }
}

/**
 * Generate options for the icons plugin.
 *
 * @param options - Module options provided by Nuxt.
 * @returns The options for the icons plugin in JSON format.
 */
function generateIconsPluginOptions(options: ModuleOptions): string {
  return Array.isArray(options.icons)
    ? `{ collections: getIconCollections(${JSON.stringify(options.icons)}) }`
    : typeof options.icons === 'object'
      ? JSON.stringify(options.icons)
      : '{}'
}
