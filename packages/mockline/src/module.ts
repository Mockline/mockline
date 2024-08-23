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
import type { Nuxt } from '@nuxt/schema'
import { name, version } from '../package.json'
import { addTemplates } from './templates'
import { installTailwind } from './tailwind'
import type { ModuleOptions } from './runtime/types'
import { type Color, colors } from './runtime/utils/colors'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
  },
  defaults: {
    prefix: 'M',
    content: false,
    colors: [],
    transitions: false,
  },
  async setup(options: ModuleOptions, nuxt: Nuxt): Promise<void> {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias['#mockline'] = resolve('./runtime')

    options.colors = (options.colors?.length ? [...new Set(['primary', 'canvas', ...options.colors])] : colors) as Color[]

    // @ts-expect-error - TS doesn't know that the key exists
    nuxt.options.mockline = options

    nuxt.options.appConfig.mockline = defu(nuxt.options.appConfig.mockline || {}, {
      primary: 'iris',
      canvas: 'mauve',
    })

    const resolver = createResolver(import.meta.url)

    nuxt.options.css.push(resolver.resolve('./output.css'))

    // Templates
    addTemplates(options, nuxt)
    await installTailwind(options, nuxt, resolve)

    addPlugin({ src: resolve(runtimeDir, 'plugins', 'colors') })

    // Modules
    await installModule('@nuxtjs/color-mode', { classSuffix: '', storageKey: 'mockline-color-mode' })
    await installModule('@nuxt/icon', {
      componentName: 'MIcon',
      mode: 'svg',
    })

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
