import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
  installModule,
  addImportsSources,
  addPlugin,
  hasNuxtModule,
  addVitePlugin
} from '@nuxt/kit'
import { defu } from 'defu'
import type { Nuxt } from '@nuxt/schema'
import { name, version } from '../package.json'
import { addTemplates } from './templates'
import { colors } from './runtime/utils/colors'
import type { Color } from './runtime/utils/colors'

export type * from './runtime/types'

export type ModuleOptions = {
  /**
   * Prefix for all components
   */
  prefix?: string,
  /**
   * Enable Nuxt Content
   * @default false
   */
  content?: boolean
  /**
   * The colors to use
   */
  colors?: Color[]
  /**
   * Enable Color Transitions
   * @default false
   */
  transitions?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
  },
  defaults: {
    prefix: 'M',
    content: false,
    colors: undefined,
    transitions: false,
  },
  async setup(options: ModuleOptions, nuxt: Nuxt): Promise<void> {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.router.options.scrollBehaviorType = 'smooth'

    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias['#mockline'] = resolve('./runtime')

    options.colors = options.colors?.length ? [...new Set(['primary', ...options.colors])] : ['primary']

    nuxt.options.mockline = options

    nuxt.options.appConfig.mockline = defu(nuxt.options.appConfig.mockline || {}, {
      colors: {
        primary: 'blue',
        neutral: 'neutral',
      }
    })

    // Isolate root node from portaled components
    nuxt.options.app.rootAttrs = nuxt.options.app.rootAttrs || {}
    nuxt.options.app.rootAttrs.class = [nuxt.options.app.rootAttrs.class, 'isolate'].filter(Boolean).join(' ')

    // Templates
    addTemplates(options, nuxt)

    // Tailwind
    if (nuxt.options.builder === '@nuxt/vite-builder') {
      const plugin = await import('@tailwindcss/vite').then(r => r.default)
      addVitePlugin(plugin())
    } else {
      nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {}
    }

    // Modules
    async function registerModule(name: string, options: Record<string, any>): Promise<void> {
      if (!hasNuxtModule(name)) {
        await installModule(name, options)
      } else {
        (nuxt.options as any)[name] = defu((nuxt.options as any)[name], options)
      }
    }

    await registerModule('@nuxt/icon', {
      componentName: `${options.prefix}Icon`,
      class: 'fill-current',
      mode: 'svg',
    })

    await registerModule('@nuxt/fonts', { experimental: { processCSSVariables: true } })

    await registerModule('@nuxtjs/color-mode', { classSuffix: '', disableTransition: true, storageKey: 'mockline-color-mode' })

    addPlugin({ src: resolve(runtimeDir, 'plugins', 'colors') })

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
      prefix: options.prefix,
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

    if (options.content) {
      await registerModule('@nuxt/content', {
        highlight: {
          theme: {
            default: 'github-dark-default',
            dark: 'github-dark-default',
            light: 'github-light-default'
          },
        },
        highlight: {
          langs: ['bash', 'ts', 'diff', 'vue', 'json', 'yml', 'css', 'mdc']
        }
      })

      await addComponentsDir({
        path: resolve('./runtime/components/content'),
        prefix: options.prefix,
        pathPrefix: false
      })

      await addComponentsDir({
        path: resolve('./runtime/components/prose'),
        pathPrefix: false,
        global: true
      })
    }

    // Composables
    addImportsDir(resolve('./runtime/composables'))
  },
})
