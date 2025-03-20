import { fileURLToPath } from 'node:url'

import { normalize } from 'pathe'
import type { UnpluginOptions } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options as AutoImportOptions } from 'unplugin-auto-import/types'
import type { Options as ComponentsOptions } from 'unplugin-vue-components/types'
import { defu } from 'defu'
import tailwind from '@tailwindcss/vite'

import { type ModuleOptions, type MocklineConfig, defaultModuleOptions, defaultAppConfig } from '@mockline/themes'

import PluginsPlugin from './plugins/plugins'
import AppConfigPlugin from './plugins/app-config'
import ComponentImportPlugin from './plugins/components'
import NuxtEnvironmentPlugin from './plugins/nuxt-environment'
import UseComponentPlugin from './plugins/use-component'

import AutoImportPlugin from './plugins/auto-import'

export interface MocklineOptions {
  /** Whether to generate declaration files for auto-imported components. */
  dts?: boolean
  mockline?: MocklineConfig
  /**s
   * Override options for `unplugin-auto-import`
   */
  autoImport?: Partial<AutoImportOptions>
  /**
   * Override options for `unplugin-vue-components`
   */
  components?: Partial<ComponentsOptions>
}

export const runtimeDir = normalize(fileURLToPath(new URL('./runtime', import.meta.url)))

// eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/default-param-last
export const MocklinePlugin = createUnplugin<MocklineOptions | undefined>((_options = {}, meta) => {
  const options = defu(_options, { })

  const appConfig = defu({ mockline: options.mockline }, { mockline: defaultAppConfig })

  return [
    NuxtEnvironmentPlugin(),
    ComponentImportPlugin(options, meta),
    AutoImportPlugin(options, meta),
    tailwind(),
    PluginsPlugin(),
    AppConfigPlugin(appConfig),
    UseComponentPlugin(),
    <UnpluginOptions>{
      name: 'mockline:plugins-duplication-detection',
      vite: {
        configResolved(config) {
          const plugins = config.plugins || []

          if (plugins.filter(i => i.name === 'unplugin-auto-import').length > 1) {
            throw new Error('[Mockline] Multiple instances of `unplugin-auto-import` detected. Mockline includes `unplugin-auto-import` already, and you can configure it using `autoImport` option in Mockline module options.')
          }
          if (plugins.filter(i => i.name === 'unplugin-vue-components').length > 1) {
            throw new Error('[Mockline] Multiple instances of `unplugin-vue-components` detected. Mockline includes `unplugin-vue-components` already, and you can configure it using `components` option in Mockline module options.')
          }
        }
      }
    }
  ].flat(1) as UnpluginOptions[]
})
