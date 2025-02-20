import path from 'node:path'
import * as fs from 'node:fs'
import type { UnpluginOptions } from 'unplugin'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function UseComponentPlugin() {
  return {
    name: 'mockline:use-component',
    enforce: 'pre',
    resolveId(id) {
      if (id === '#mockline/utils/useComponent') {
        return 'virtual:mockline-use-component'
      }
    },
    loadInclude: id => id === 'virtual:mockline-use-component',
    load() {
      const filePath = path.resolve(__dirname, '../runtime/utils/useComponent.ts')
      return fs.readFileSync(filePath, 'utf-8')
    }
  } satisfies UnpluginOptions
}
