import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  installModule,
  addImportsSources,
  addImportsDir,
  hasNuxtModule, addVitePlugin
} from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import { defu } from 'defu'
import { name, version } from '../package.json'

export type MocklineUtilsModuleOptions = {
  /** Import base component (just some basic component to kickstart project App, Theme Toggle etc...)
   * @defaultValue `true`
   */
  importComponents?: boolean
  /**
   * Prefix for all components
   * @defaultValue `M`
   */
  prefix?: string,
  /**
   * Enable or disable `@nuxt/fonts` module
   * @defaultValue `true`
   */
  fonts?: boolean
  /**
   * Enable or disable `@nuxt/icon` module
   * @defaultValue `true`
   */
  icon?: boolean
  /**
   * Enable or disable `@nuxtjs/color-mode` module
   * @defaultValue `true`
   */
  colorMode?: boolean
}

export default defineNuxtModule<MocklineUtilsModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mocklineUtils',
  },
  defaults: {
    importComponents: true,
    prefix: 'M',
    fonts: true,
    icon: true,
    colorMode: true
  },
  async setup(options: MocklineUtilsModuleOptions, nuxt: Nuxt): Promise<void> {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.router.options.scrollBehaviorType = 'smooth'

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

    if (options.icon) {
      await registerModule('@nuxt/icon', {
        componentName: `${options.prefix}Icon`,
        class: 'fill-current',
        mode: 'svg',
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

    if (options.importComponents) {
      await addComponentsDir({
        path: resolve('./runtime/components'),
        prefix: options.prefix,
        pathPrefix: false,
      })

      addImportsDir(resolve('./runtime/composables'))
    }
  },
})
