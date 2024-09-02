import { addTemplate, addVitePlugin, createResolver, hasNuxtModule } from '@nuxt/kit'
import type { ModuleOptions, Nuxt } from '@nuxt/schema'
import { colors, generateColor } from './runtime/utils/colors'

/**
 * Install and configure TailwindCSS module.
 *
 * @param options - Module options provided by Nuxt.
 * @param nuxt - The Nuxt instance.
 * @param resolve - Resolver function.
 */
export async function installTailwind(options: ModuleOptions, nuxt: Nuxt, resolve = createResolver(process.env.url).resolve): Promise<void> {
  if (nuxt.options.builder === '@nuxt/vite-builder') {
    const plugin = await import('@tailwindcss/vite').then(r => r.default)
    addVitePlugin(plugin())
  } else {
    nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {}
  }

  if (!nuxt.options.css.find(path => path.endsWith('tailwind.css'))) {
    const template = addTemplate({
      filename: 'tailwind.css',
      write: true,
      getContents: () => `@import "tailwindcss";

${hasNuxtModule('@nuxt/content') ? '@source "../content/**/*.md";' : ''}

@theme {
  ${ colors.map(color => generateColor(color)).join('\n') }
}` })

    nuxt.options.css.unshift(template.dst)
  }
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
      ],
    };
  `
}
