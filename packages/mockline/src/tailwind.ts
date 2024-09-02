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
