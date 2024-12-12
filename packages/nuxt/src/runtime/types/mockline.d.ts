import type { MocklineConfig } from '@mockline/types'

declare module '@nuxt/schema' {
  type AppConfigInput = {
    mockline?: MocklineConfig
  }
}

declare module '#build/app.config' {
  type AppConfigInput = {
    mockline?: MocklineConfig
  }
}

export {}
