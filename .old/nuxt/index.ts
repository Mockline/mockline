import { addComponent, defineNuxtModule } from '@nuxt/kit'

import type { } from '@nuxt/schema' // workaround for TS bug with "phantom" deps
import { components, components as allComponents } from '../constant/components'

export interface ModuleOptions {
  components: Partial<Record<keyof typeof allComponents, boolean>> | boolean
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
  setup(options,nuxt) {
    function getComponents() {
      if (typeof options.components === 'object') {
        return Object.entries(allComponents)
          .filter(([name]) => (options.components as Record<string, boolean>)[name])
          .flatMap(([_, components]) => components)
      }

      if (options.components)
        return Object.values(allComponents).flat()

      return []
    }

    for (const component of getComponents()) {
      addComponent({
        name: `${ options.prefix }${ component }`,
        export: component,
        filePath: 'mockline',
      }).then()
    }

    // nuxt.options.css.push('mockline/dist/index.css')
  },
})
