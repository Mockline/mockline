import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  installModule,
  addImportsSources,
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
    await installModule('@nuxtjs/color-mode', { classSuffix: '', storageKey: 'mockline-color-mode' })
    await installModule('@nuxt/fonts')
    await installModule('@nuxt/icon', {
      componentName: 'MIcon',
      class: 'fill-current',
      mode: 'svg',
    })

    // Add vue-sonner
    addImportsSources({
      from: 'vue-sonner',
      imports: ['toast'],
    })

    // Components elements
    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()
  },
})
