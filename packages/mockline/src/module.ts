import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
  installModule,
  addImportsSources,
  addPlugin
} from '@nuxt/kit'
import { defu } from 'defu'
import type { CollectionNames, IconsPluginOptions } from '@egoist/tailwindcss-icons'
import { name, version } from '../package.json'
import { addTemplates } from './templates'
import { installTailwind } from './tailwind'

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
  async setup(options: ModuleOptions, nuxt): Promise<void> {
    const {resolve} = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias['#mockline'] = resolve('./runtime')

    nuxt.options.appConfig.mockline = defu(nuxt.options.appConfig.mockline || {}, {
      primary: 'iris',
      canvas: 'mauve',
    })

    addTemplates(nuxt)
    await installTailwind(options, nuxt, resolve)

    addPlugin({ src: resolve(runtimeDir, 'plugins', 'colors')})
    // Modules
    await installModule('@nuxtjs/color-mode', { classSuffix: '' })

    // Add imports
    addImportsSources({
      from: 'vue-sonner',
      imports: ['toast'],
    })

    // Components elements
    addComponentsDir({
      path: resolve('./runtime/components/elements'),
      prefix: options.prefix,
      pathPrefix: false,
      watch: false
    }).then()

    // Components layout
    addComponentsDir({
      path: resolve('./runtime/components/layout'),
      prefix: options.prefix,
      pathPrefix: false,
      watch: false
    }).then()

    addImportsDir(resolve('./runtime/composables'))
  },
})
