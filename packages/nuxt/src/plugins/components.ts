import { join, normalize } from 'pathe'
import type { UnpluginContextMeta, UnpluginOptions } from 'unplugin'
import { globSync } from 'tinyglobby'
import AutoImportComponents from 'unplugin-vue-components'
import type { Options as ComponentsOptions } from 'unplugin-vue-components/types'
import { defu } from 'defu'
import { runtimeDir } from '../unplugin'
import type { MocklineOptions } from '../unplugin'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function ComponentImportPlugin(options: MocklineOptions, meta: UnpluginContextMeta) {
  const components = globSync('**/*.vue', { cwd: join(runtimeDir, 'components') })
  const componentNames = new Set(
    components.map(file => {
      const base = file.replace(/\.vue$/, '')
      return base === 'Icon'
        ? 'Icon'
        : 'M' + base
    })
  )

  const overrides = globSync('**/*.vue', { cwd: join(runtimeDir, 'vue/components') })
  const overrideNames = new Set(
    overrides.map(file => {
      const base = file.replace(/\.vue$/, '')
      return base === 'Icon'
        ? 'Icon'
        : 'M' + base
    })
  )

  const pluginOptions = defu(options.components, <ComponentsOptions>{
    dts: options.dts ?? true,
    exclude: [
      /[\\/]\.git[\\/]/,
      /[\\/]\.nuxt[\\/]/,
      /[\\/]node_modules[\\/](?!\.pnpm|mockline)/,
    ],
    resolvers: [
      (componentName) => {
        if (overrideNames.has(componentName)) {
          const realName = removeMPrefix(componentName)
          return {
            name: 'default',
            from: join(runtimeDir, 'vue/components', realName + '.vue')
          }
        }
        if (componentNames.has(componentName)) {
          const realName = removeMPrefix(componentName)
          return {
            name: 'default',
            from: join(runtimeDir, 'components', realName + '.vue')
          }
        }
      }
    ]
  })

  return [
    {
      name: 'mockline:components',
      enforce: 'pre',
      resolveId(id, importer) {
        if (!importer || !normalize(importer).includes(runtimeDir))
          return

        if (!RELATIVE_IMPORT_RE.test(id))
          return

        const filename = id.match(/([^/]+)\.vue$/)?.[1] ?? ''
        if (overrideNames.has('M' + filename) || overrideNames.has(filename)) {
          return join(runtimeDir, 'vue/components', filename + '.vue')
        }
      }
    },
    AutoImportComponents.raw(pluginOptions, meta) as UnpluginOptions
  ] satisfies UnpluginOptions[]
}

function removeMPrefix(componentName: string) {
  if (componentName.startsWith('M')) {
    return componentName.slice(1)
  }
  return componentName
}

const RELATIVE_IMPORT_RE = /^\.{1,2}\//
