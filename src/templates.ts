import { addTypeTemplate } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { ModuleOptions } from './module'

export function addTemplates(options: ModuleOptions, nuxt: Nuxt) {
  addTypeTemplate({
    filename: 'types/ui.d.ts',
    getContents: () => `
      const icons = ${ JSON.stringify(nuxt.options.appConfig.mockline.icons) };

      type AppConfigMockline = {
        gray?: 'slate' | 'cool' | 'zinc' | 'neutral' | 'stone'
        icons?: Partial<typeof icons>
      }

      declare module 'nuxt/schema' {
        type AppConfigInput = {
          mockline?: AppConfigMockline
        }
      }
      declare module '@nuxt/schema' {
        type AppConfigInput = {
          mockline?: AppConfigMockline
        }
      }
      export {}`
  })
}
