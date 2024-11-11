import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
  installModule,
  addPlugin,
  hasNuxtModule,
  addVitePlugin,
  addImportsSources,
} from '@nuxt/kit'
import { defu } from 'defu'
import type { Nuxt } from '@nuxt/schema'
import type { ModuleOptions } from '@mockline/types'
import { name, version } from '../package.json'
import { addTemplates } from './templates'

export type * from './runtime/types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
    compatibility: {
      nuxt: '>=3.13.1'
    },
  },
  defaults: {
    prefix: 'M',
    fonts: true,
    icon: true,
    colorMode: true,
    content: false,
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

    // @ts-expect-error - Fix this later
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

    async function registerModule(name: string, options: Record<string, any>): Promise<void> {
      if (!hasNuxtModule(name)) {
        await installModule(name, options)
      } else {
        (nuxt.options as any)[name] = defu((nuxt.options as any)[name], options)
      }
    }

    if (nuxt.options.builder === '@nuxt/vite-builder') {
      const plugin = await import('@tailwindcss/vite').then(r => r.default)
      addVitePlugin(plugin())
    } else {
      nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {}
    }

    if (options.icon) {
      await registerModule('@nuxt/icon', {
        componentName: `${options.prefix}Icon`,
        class: 'fill-current',
        mode: 'svg',
        customCollections: [
          {
            prefix: 'custom',
            dir: './assets/icons'
          },
        ],
      })
    }

    if (options.fonts)
      await registerModule('@nuxt/fonts', { experimental: { processCSSVariables: true } })

    if (options.colorMode)
      await registerModule('@nuxtjs/color-mode', { classSuffix: '', disableTransition: true, storageKey: 'mockline-color-mode' })

    addImportsSources({
      from: 'vue-sonner',
      imports: ['toast'],
    })

    addPlugin({ src: resolve(runtimeDir, 'plugins', 'colors') })

    addComponentsDir({
      path: resolve('./runtime/components/'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()

    if (options.content) {
      await registerModule('@nuxt/content', {
        highlight: {
          theme: {
            dark: 'github-dark',
            default: 'github-light',
            light: 'github-light'
          },
          langs: ['bash', 'ts', 'diff', 'vue', 'json', 'yml', 'css', 'mdc']
        },
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

    addTemplates(options, nuxt, resolve)

    addImportsDir(resolve('./runtime/composables'))
  },
})
