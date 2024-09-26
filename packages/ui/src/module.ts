import { defu } from 'defu'
import { createResolver, defineNuxtModule, addComponentsDir, addImportsDir, addVitePlugin, addPlugin, installModule, hasNuxtModule } from '@nuxt/kit'
import { addTemplates } from './templates'

export type * from './runtime/types'

export interface ModuleOptions {
  /**
   * Prefix for components
   * @defaultValue U
   */
  prefix?: string

  /**
   * Enable or disable `@nuxt/fonts` module
   * @defaultValue true
   */
  fonts?: boolean

  theme?: {
    /**
     * Colors to generate classes for (defaults to TailwindCSS colors)
     * @defaultValue ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
     */
    colors?: string[]

    /**
     * Enable or disable transitions on components
     * @defaultValue true
     */
    transitions?: boolean
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'mockline',
    configKey: 'mockline',
    compatibility: {
      nuxt: '>=3.13.1'
    }
  },
  defaults: {
    prefix: 'M',
    fonts: true,
    theme: {
      colors: undefined,
      transitions: true
    }
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    options.theme = options.theme || {}
    options.theme.colors = options.theme.colors?.length ? [...new Set(['primary', 'error', ...options.theme.colors])] : ['primary', 'error', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']

    nuxt.options.mockline = options

    nuxt.options.alias['#mockline'] = resolve('./runtime')

    nuxt.options.appConfig.mockline = defu(nuxt.options.appConfig.mockline || {}, {
      colors: {
        primary: 'green',
        error: 'red',
        gray: 'slate'
      }
    })

    // Isolate root node from portaled components
    nuxt.options.app.rootAttrs = nuxt.options.app.rootAttrs || {}
    nuxt.options.app.rootAttrs.class = [nuxt.options.app.rootAttrs.class, 'isolate'].filter(Boolean).join(' ')

    if (nuxt.options.builder === '@nuxt/vite-builder') {
      const plugin = await import('@tailwindcss/vite').then(r => r.default)
      addVitePlugin(plugin())
    } else {
      nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {}
    }

    if (options.fonts) {
      if (!hasNuxtModule('@nuxt/fonts')) {
        await installModule('@nuxt/fonts', { experimental: { processCSSVariables: true } })
      } else {
        nuxt.options.fonts = defu(nuxt.options.fonts, { experimental: { processCSSVariables: true } })
      }
    }

    if (!hasNuxtModule('@nuxt/icon')) {
      await installModule('@nuxt/icon', { cssLayer: 'components', componentName: 'MIcon', })
    } else {
      nuxt.options.icon = defu(nuxt.options.icon, { cssLayer: 'components', componentName: 'MIcon', })
    }

    if (!hasNuxtModule('@nuxtjs/color-mode')) {
      await installModule('@nuxtjs/color-mode', { classSuffix: '' })
    } else {
      nuxt.options.colorMode = defu(nuxt.options.colorMode, { classSuffix: '' })
    }

    addPlugin({
      src: resolve('./runtime/plugins/colors')
    })

    await addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false
    })

    addImportsDir(resolve('./runtime/composables'))

    addTemplates(options, nuxt)
  }
})
