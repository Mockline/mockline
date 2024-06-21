import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
  installModule,
  addImportsSources,
  addPlugin,
  hasNuxtModule
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
  icons: CollectionNames[] | 'all' | IconsPluginOptions,
  /**
   * Enable Nuxt Content
   * @default false
   */
  content?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
  },
  defaults: {
    prefix: 'M',
    icons: ['heroicons', 'lucide'],
    content: false
  },
  async setup(options: ModuleOptions, nuxt): Promise<void> {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias['#mockline'] = resolve('./runtime')

    nuxt.options.appConfig.mockline = defu(nuxt.options.appConfig.mockline || {}, {
      primary: 'iris',
      canvas: 'mauve',
    })

    // Templates
    addTemplates(nuxt)
    await installTailwind(options, nuxt, resolve)

    addPlugin({ src: resolve(runtimeDir, 'plugins', 'colors') })

    // Modules
    await installModule('@nuxtjs/color-mode', { classSuffix: '', storageKey: 'mockline-color-mode' })

    // Add vue-sonner
    addImportsSources({
      from: 'vue-sonner',
      imports: ['toast'],
    })

    // Components elements
    addComponentsDir({
      path: resolve('./runtime/components/elements'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()

    // Components layout
    addComponentsDir({
      path: resolve('./runtime/components/layout'),
      prefix: '',
      pathPrefix: false,
    }).then()

    // Components settings
    addComponentsDir({
      path: resolve('./runtime/components/settings'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()

    // Components overlays
    addComponentsDir({
      path: resolve('./runtime/components/overlays'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()

    if (hasNuxtModule('@nuxt/content') || options.content) {
      if (!hasNuxtModule('@nuxt/content'))
        await installModule('@nuxt/content')

      addComponentsDir({
        path: resolve('./runtime/components/content'),
        prefix: options.prefix,
        pathPrefix: false
      }).then()

      // Components global
      addComponentsDir({
        path: resolve('./runtime/components/global'),
        global: true,
        prefix: '',
        pathPrefix: false
      }).then()

      // @ts-expect-error content module is an external module
      nuxt.options.content = defu(nuxt.options.content, {
        highlight: {
          theme: {
            default: 'github-dark-default',
            dark: 'github-dark-default',
            light: 'github-light-default'
          },
          preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
        },
      })
    }

    // Composables
    addImportsDir(resolve('./runtime/composables'))
  },
})
