import type { MocklineConfig } from '@mockline/themes'

declare module '@nuxt/schema' {
   
  interface AppConfigInput {
    mockline?: MocklineConfig
  }
}

declare module '#build/app.config' {
   
  interface AppConfigInput {
    mockline?: MocklineConfig
  }
}

export {}
