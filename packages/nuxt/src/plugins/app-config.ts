import type { UnpluginOptions } from 'unplugin'

import type { MocklineOptions } from '../unplugin'

/**
 * This plugin injects Mockline configuration into the runtime build so Mockline components can
 * access it.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AppConfigPlugin(options: MocklineOptions, appConfig: Record<string, any>) {
  return {
    name: 'mockline:app-config',
    enforce: 'pre',
    resolveId(id) {
      if (id === '#build/app.config') {
        return 'virtual:mockline-app-config'
      }
    },
    loadInclude: id => id === 'virtual:mockline-app-config',
    load() {
      return `
          export default ${JSON.stringify(appConfig!)}
        `
    }
  } satisfies UnpluginOptions
}
