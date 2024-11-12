import { addTemplate, addTypeTemplate, type Resolver } from '@nuxt/kit'
import { kebabCase } from 'scule'
import type { ModuleOptions } from '@mockline/types'
import type { Nuxt, NuxtTemplate, NuxtTypeTemplate } from '@nuxt/schema'
import * as themes from '@mockline/themes'

export function getTemplates(options: ModuleOptions): NuxtTemplate[] {
  const templates: NuxtTemplate[] = []

  for (const component in themes) {
    templates.push({
      filename: `mockline/${ kebabCase(component) }.ts`,
      write: true,
      getContents: () => {
        const template = (themes as any)[component]
        const result = typeof template === 'function' ? template(options) : template

        const variants = Object.keys(result.variants || {})

        let json = JSON.stringify(result, null, 2)

        for (const variant of variants) {
          json = json.replace(new RegExp(`("${variant}": "[^"]+")`, 'g'), '$1 as const')
          json = json.replace(new RegExp(`("${variant}": \\[\\s*)((?:"[^"]+",?\\s*)+)(\\])`, 'g'), (_, before, match, after) => {
            const replaced = match.replace(/("[^"]+")/g, '$1 as const')
            return `${ before }${ replaced }${ after }`
          })
        }

        return `export default ${ json }`
      }
    })
  }

  addTemplate({
    filename: 'mockline/index.ts',
    write: true,
    getContents: () => Object.keys(themes).map(component => `export { default as ${component} } from './${kebabCase(component)}'`).join('\n')
  })

  return templates
}

export function addTemplates(options: ModuleOptions, nuxt: Nuxt, resolve: Resolver['resolve']): void {
  const templates = getTemplates(options)
  for (const template of templates) {
    if (template.filename!.endsWith('.d.ts')) {
      addTypeTemplate(template as NuxtTypeTemplate)
    } else {
      addTemplate(template)
    }
  }

  nuxt.hook('prepare:types', ({ references }) => {
    references.push({ path: resolve('./runtime/types/app.config.d.ts') })
    references.push({ path: resolve('./runtime/types/mockline.d.ts') })
  })
}
