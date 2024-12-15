import type { MocklineConfig } from '@mockline/themes'

declare module '@nuxt/schema' {
  // eslint-disable-next-line
  interface AppConfigInput {
    mockline?: MocklineConfig
  }
}

declare module '#build/app.config' {
  // eslint-disable-next-line
  interface AppConfigInput {
    mockline?: MocklineConfig
  }
}

export {}
