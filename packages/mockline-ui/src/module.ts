import { defineNuxtModule, createResolver, addComponentsDir, addImportsDir } from '@nuxt/kit'

import { components as allComponents } from '../constant/components'

// Module options TypeScript interface definition
export interface ModuleOptions {
  components: Partial<Record<keyof typeof allComponents, boolean>> | boolean
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'mockline',
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
  },
})
