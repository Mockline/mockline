import type { Resolver } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

export function addTemplates(nuxt: Nuxt, resolve: Resolver['resolve']): void {
  nuxt.hook('prepare:types', ({ references }) => {
    references.push({ path: resolve('./runtime/types/app.config.d.ts') })
    references.push({ path: resolve('./runtime/types/mockline.d.ts') })
  })
}
