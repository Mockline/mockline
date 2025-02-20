import { join, normalize } from 'pathe'
import type { UnpluginContextMeta, UnpluginOptions } from 'unplugin'
import { globSync } from 'tinyglobby'
import AutoImportComponents from 'unplugin-vue-components'
import type { Options as ComponentsOptions } from 'unplugin-vue-components/types'

import { defu } from 'defu'
import { runtimeDir } from '../unplugin'
import type { MocklineOptions } from '../unplugin'

/**
 * This plugin adds all the Nuxt UI components as auto-imports.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export default function ComponentImportPlugin(options: MocklineOptions, meta: UnpluginContextMeta) {
  const components = globSync('**/*.vue', { cwd: join(runtimeDir, 'components') })
  const componentNames = new Set(components.map(c => `${options.prefix}${c.replace(/\.vue$/, '')}`))

  const overrides = globSync('**/*.vue', { cwd: join(runtimeDir, 'vue/components') })
  const overrideNames = new Set(overrides.map(c => `${options.prefix}${c.replace(/\.vue$/, '')}`))

  const pluginOptions = defu(options.components, <ComponentsOptions>{
    dts: options.dts ?? true,
    exclude: [/[\\/]node_modules[\\/](?!\.pnpm|@nuxt\/ui)/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [
      (componentName) => {
        if (overrideNames.has(componentName))
          return { name: 'default', from: join(runtimeDir, 'vue/components', `${componentName.slice('M'.length)}.vue`) }
        if (componentNames.has(componentName))
          return { name: 'default', from: join(runtimeDir, 'components', `${componentName.slice('M'.length)}.vue`) }
      }
    ]
  })

  return [
    /**
     * This plugin aims to ensure we override certain components with Vue-compatible versions:
     * <UIcon> and <ULink> currently.
     */
    {
      name: 'mockline:components',
      enforce: 'pre',
      resolveId(id, importer) {
        // only apply to runtime nuxt ui components
        if (!importer || !normalize(importer).includes(runtimeDir)) {
          return
        }

        // only apply to relative imports
        if (!RELATIVE_IMPORT_RE.test(id)) {
          return
        }

        const filename = id.match(/([^/]+)\.vue$/)?.[1]
        if (filename && overrideNames.has(`${options.prefix}${filename}`)) {
          return join(runtimeDir, 'vue/components', `${filename}.vue`)
        }
      }
    },
    AutoImportComponents.raw(pluginOptions, meta) as UnpluginOptions
  ] satisfies UnpluginOptions[]
}

const RELATIVE_IMPORT_RE = /^\.{1,2}\//
