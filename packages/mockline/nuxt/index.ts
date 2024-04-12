import { addComponent, defineNuxtModule } from '@nuxt/kit'

import type { } from '@nuxt/schema' // workaround for TS bug with "phantom" deps
import { components as allComponents } from '../../mockline/constant/components'

export type ModuleOptions = {
  /**
   * The components to add
   */
  components: Partial<Record<keyof typeof allComponents, boolean>> | boolean
  /**
   * The prefix to add to the component names
   */
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@mockline/nuxt',
    configKey: 'mockline',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    prefix: '',
    components: true,
  },
  setup(options) {
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
      }).then(r => r)
    }
  },
})
