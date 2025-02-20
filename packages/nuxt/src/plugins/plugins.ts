import { join } from 'pathe'
import { globSync } from 'tinyglobby'
import { genSafeVariableName } from 'knitwork'
import MagicString from 'magic-string'
import { resolvePathSync } from 'mlly'

import type { UnpluginOptions } from 'unplugin'
import { runtimeDir, type MocklineOptions } from '../unplugin'


/**
 * This plugin provides the necessary transforms to allow loading the
 * Mockline _Nuxt_ plugins in `src/runtime/plugins/` in a pure Vue environment.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export default function PluginsPlugin(options: MocklineOptions) {
  const plugins = globSync(['**/*', '!*.d.ts'], { cwd: join(runtimeDir, 'plugins'), absolute: true })

  if (options.colorMode) {
    plugins.push(resolvePathSync('../runtime/vue/plugins/color-mode', { extensions: ['.ts', '.mjs', '.js'], url: import.meta.url }))
  }

  return {
    name: 'mockline:plugins',
    enforce: 'pre',
    resolveId(id) {
      if (id === 'mockline/vue-plugin') {
        return 'virtual:mockline-plugins'
      }
    },
    transform(code, id) {
      if (plugins.some(p => id.startsWith(p)) && code.includes('import.meta.client')) {
        const s = new MagicString(code)
        s.replaceAll('import.meta.client', 'true')

        if (s.hasChanged()) {
          return {
            code: s.toString(),
            map: s.generateMap({ hires: true })
          }
        }
      }
    },
    loadInclude: id => id === 'virtual:mockline-plugins',
    load() {
      return `
        ${plugins.map(p => `import ${genSafeVariableName(p)} from "${p}"`).join('\n')}
export default {
  install (app) {
${plugins.map(p => `    app.use(${genSafeVariableName(p)})`).join('\n')}
  }
}
        `
    },
    // Argument Vite specific configuration
    vite: {
      config() {
        return {
          // Opt-out Mockline from Vite's pre-bundling,
          // as we need Vite's pipeline to resolve imports like `#imports`
          optimizeDeps: {
            exclude: ['mockline']
          }
        }
      }
    }
  } satisfies UnpluginOptions
}
