import { addComponent, defineNuxtModule, addComponentsDir, addImportsDir, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'mockline/nuxt',
    configKey: 'mockline',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    prefix: '',
    components: true,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addComponentsDir({
      path: resolve('./runtime/components'),
      prefix: options.prefix,
      pathPrefix: false
    }).then()

    addImportsDir(resolve('./runtime/composables'))

    // nuxt.options.css.push('mockline/dist/index.css')
  },
})
