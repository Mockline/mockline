import type { ToasterProps } from 'vue-sonner'

const colors = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']

export type MocklineConfig = {
  /**
   * Primary color (accent)
   */
  primary?: typeof colors[number]
  /**
   * Canvas color (background)
   */
  canvas?: typeof colors[number]
  /**
   * Icons
   */
  icons?: {
    loading?: string
  }
  /**
   * Toast
   */
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
