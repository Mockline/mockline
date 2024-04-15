import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
  installModule,
  addImportsSources
} from '@nuxt/kit'
import { defu } from 'defu'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'
import type { CollectionNames, IconsPluginOptions } from '@egoist/tailwindcss-icons'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'
import { name, version } from '../package.json'
import { addTemplates } from './templates'

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
    prefix: 'M',
    icons: ['heroicons', 'lucide']
  },
  async setup(options, nuxt) {
    const {resolve} = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias['#mockline'] = resolve('./runtime')

    nuxt.options.appConfig.mockline = defu(nuxt.options.appConfig.mockline || {}, {
      primary: 'orange',
      gray: 'neutral',
    })

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

    // Add imports
    addImportsSources({
      from: 'vue-sonner',
      imports: ['toast'],
    })

    // Components elements
    addComponentsDir({
      path: resolve('./runtime/components/elements'),
      prefix: options.prefix,
      pathPrefix: false
    }).then()

    // Components layout
    addComponentsDir({
      path: resolve('./runtime/components/layout'),
      prefix: options.prefix,
      pathPrefix: false
    }).then()

    addImportsDir(resolve('./runtime/composables'))

    addTemplates(options, nuxt)
  },
})
