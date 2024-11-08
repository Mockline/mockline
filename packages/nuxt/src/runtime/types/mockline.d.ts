import type { ToasterProps } from 'vue-sonner'

const colors = JSON.stringify(options.colors) as const

type MocklineConfig = {
  primary?: typeof colors[number]
  canvas?: typeof colors[number]
  toast?: {
    position?: ToasterProps['position']
    duration?: number
  }
}

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
