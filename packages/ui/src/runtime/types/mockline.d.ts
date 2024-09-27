import type { ToasterProps } from 'vue-sonner'

const colors = 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' | 'teal' | 'orange' | 'cyan' | 'black' | 'white'
const gray = 'neutral' | 'slate' | 'gray' | 'zinc' | 'stone'

export type MocklineConfig = {
  icons?: {
    loading?: string
  }
  colors?: {
    primary?: typeof colors
    gray?: typeof gray
  }
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
