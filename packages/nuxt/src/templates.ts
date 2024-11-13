import { fileURLToPath } from 'node:url'
import { addTemplate, addTypeTemplate, type Resolver } from '@nuxt/kit'
import { kebabCase } from 'scule'
import type { ModuleOptions } from '@mockline/types'
import type { Nuxt, NuxtTemplate, NuxtTypeTemplate } from '@nuxt/schema'
import { themes, processComponentTheme, generateDevImport } from '@mockline/themes'

export function getTemplates(options: ModuleOptions): NuxtTemplate[] {
  const templates: NuxtTemplate[] = []

  for (const component in themes) {
    if (component === 'default' || component === 'generateDevImport' || component === 'processComponentTheme') continue
    templates.push({
      filename: `mockline/${ kebabCase(component) }.ts`,
      write: true,
      getContents: () => {
        const template = (themes as any)[component]
        const result = template(options)
        console.log(`--- ${component} ---`)

        const variants = Object.keys(result.variants || {})
        const json = JSON.stringify(result, null, 2)
        const processedJson = processComponentTheme(json, variants)

        const themePath = fileURLToPath(
          new URL(`../../themes/src/components/${kebabCase(component)}`, import.meta.url)
        )

        return process.env.DEV
          ? generateDevImport(themePath, options, processedJson)
          : `export default ${processedJson}`
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
