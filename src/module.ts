import { defineNuxtModule, createResolver, addImportsDir, addComponentsDir, installModule } from '@nuxt/kit'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'
import type { CollectionNames, IconsPluginOptions } from '@egoist/tailwindcss-icons'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'
import { name, version } from '../package.json'

export type ModuleOptions = {
  /**
   * Prefix for all components
   */
  prefix?: string,
  /**
   * The icon collections to use
   * @default ['heroicons', 'lucide']
   */
  icons: CollectionNames[] | 'all' | IconsPluginOptions
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
  },
  defaults: {
    prefix: '',
    icons: ['heroicons', 'lucide']
  },
  async setup(options, nuxt) {
    const {resolve} = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias['#mockline'] = resolve('./runtime')

    // Modules

    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkMode: 'class',
        content: {
          files: [
            resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolve('./runtime/*.{mjs,js,ts}')
          ]
        },
        plugins: [
          forms({ strategy: 'class' }),
          aspectRatio,
          typography,
          containerQueries,
          iconsPlugin(Array.isArray(options.icons) || options.icons === 'all' ? { collections: getIconCollections(options.icons) } : typeof options.icons === 'object' ? options.icons as IconsPluginOptions : {})
        ],
      }
    })

    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false
    }).then()

    addImportsDir(resolve('./runtime/composables'))
  },
})
