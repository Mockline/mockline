import { addTemplate, addVitePlugin, createResolver, installModule } from '@nuxt/kit'
import type { ModuleOptions, Nuxt } from '@nuxt/schema'
import { defu } from 'defu'
import { join } from 'pathe'

/**
 * Install and configure TailwindCSS module.
 *
 * @param options - Module options provided by Nuxt.
 * @param nuxt - The Nuxt instance.
 */
export async function installTailwind(options: ModuleOptions, nuxt: Nuxt): Promise<void> {
  if (nuxt.options.builder === '@nuxt/vite-builder') {
    const plugin = await import('@tailwindcss/vite').then(r => r.default)
    addVitePlugin(plugin())
  } else {
    nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {}
  }
}
