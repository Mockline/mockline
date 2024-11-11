import type { MocklineConfig } from '@mockline/types'

const colors = JSON.stringify(options.colors) as const

declare module 'nuxt/schema' {
  type AppConfigInput = {
    mockline?: MocklineConfig
  }
}
declare module '@nuxt/schema' {
  type AppConfigInput = {
    mockline?: MocklineConfig
  }
}
export {}
