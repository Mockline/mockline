import { defineNuxtModule, addVitePlugin, createResolver, addImportsDir, addComponentsDir } from '@nuxt/kit'

export type ModuleOptions = {
  /**
   * Prefix for all components
   */
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'mockline',
    configKey: 'mockline',
  },
  defaults: {
    prefix: ''
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false
    }).then()

    addImportsDir(resolve('./runtime/composables'))
  },
})
