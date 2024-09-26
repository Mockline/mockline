import { fileURLToPath } from 'node:url'
import { kebabCase } from 'scule'
import { addTemplate, addTypeTemplate } from '@nuxt/kit'
import type { ModuleOptions } from './module'
import * as theme from './theme'

export function addTemplates(options: ModuleOptions) {
  for (const component in theme) {
    addTemplate({
      filename: `mockline/${kebabCase(component)}.ts`,
      write: true,
      getContents: () => {
        const template = (theme as any)[component]
        const result = typeof template === 'function' ? template(options) : template

        const variants = Object.keys(result.variants || {})

        let json = JSON.stringify(result, null, 2)

        for (const variant of variants) {
          json = json.replace(new RegExp(`("${variant}": "[^"]+")`, 'g'), '$1 as const')
          json = json.replace(new RegExp(`("${variant}": \\[\\s*)((?:"[^"]+",?\\s*)+)(\\])`, 'g'), (_, before, match, after) => {
            const replaced = match.replace(/("[^"]+")/g, '$1 as const')
            return `${before}${replaced}${after}`
          })
        }

        // For local development, directly import from theme
        if (process.env.DEV) {
          return [
            `import template from ${JSON.stringify(fileURLToPath(new URL(`./theme/${kebabCase(component)}`, import.meta.url)))}`,
            `const result = typeof template === 'function' ? template(${JSON.stringify(options)}) : template`,
            `const json = ${json}`,
            `export default result as typeof json`
          ].join('\n')
        }

        return `export default ${json}`
      }
    })
  }

  addTemplate({
    filename: 'mockline/index.ts',
    write: true,
    getContents: () => Object.keys(theme).map(component => `export { default as ${component} } from './${kebabCase(component)}'`).join('\n')
  })
}
