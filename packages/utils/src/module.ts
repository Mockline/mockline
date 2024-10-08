import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  installModule,
  addImportsSources,
  addImportsDir,
  hasNuxtModule
} from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import { name, version } from '../package.json'
import { installTailwind } from './tailwind'

export type ModuleOptions = {
  /**
   * Prefix for all components
   */
  prefix?: string,
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mocklineUtils',
  },
  defaults: {
    prefix: 'M',
  },
  async setup(options: ModuleOptions, nuxt: Nuxt): Promise<void> {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.css.push(resolve('./runtime/index.css'))

    // Templates
    await installTailwind(options, nuxt)

    // Modules
    async function registerModule(name: string, options: Record<string, any>) {
      if (!hasNuxtModule(name)) {
        await installModule(name, options)
      } else {
        (nuxt.options as any)[name] = defu((nuxt.options as any)[name], options)
      }
    }

    await registerModule('@nuxt/icon', {
      componentName: 'MIcon',
      class: 'fill-current',
      mode: 'svg',
    })

    await registerModule('@nuxt/fonts', { experimental: { processCSSVariables: true } })

    await registerModule('@nuxtjs/color-mode', { classSuffix: '', disableTransition: true, storageKey: 'mockline-color-mode' })

    // Add vue-sonner
    addImportsSources({
      from: 'vue-sonner',
      imports: ['toast'],
    })

    // Components elements
    await addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false,
    })

    addImportsDir(resolve('./runtime/composables'))
  },
})
