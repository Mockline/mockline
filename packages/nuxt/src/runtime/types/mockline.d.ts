import type { MocklineConfig } from '@mockline/types'

declare module '@nuxt/schema' {
  type AppConfigInput = {
    mockline?: MocklineConfig
  }
}
export {}
