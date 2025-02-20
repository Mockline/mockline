import { join } from 'pathe'
import type { UnpluginContextMeta, UnpluginOptions } from 'unplugin'
import { defu } from 'defu'

import AutoImport from 'unplugin-auto-import'
import type { Options as AutoImportOptions } from 'unplugin-auto-import/types'
import { runtimeDir } from '../unplugin'
import type { MocklineOptions } from '../unplugin'

/**
 * This plugin adds all the Nuxt UI composables as auto-imports.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AutoImportPlugin(options: MocklineOptions, meta: UnpluginContextMeta): UnpluginOptions {
  const pluginOptions = defu(options.autoImport, <AutoImportOptions>{
    dts: options.dts ?? true,
    dirs: [join(runtimeDir, 'composables')]
  })

  return AutoImport.raw(pluginOptions, meta) as UnpluginOptions
}
