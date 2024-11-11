import type { ToasterProps } from 'vue-sonner'

export const colors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

export type Color = typeof colors

export type ModuleOptions = {
  /**
   * Prefix for all components
   * @defaultValue 'M'
   */
  prefix?: string,
  /** Enable Nuxt Fonts
   *  @defaultValue true
   */
  fonts?: boolean
  /** Enable Nuxt Icons
   *  @defaultValue true
   */
  icon?: boolean
  /** Enable Nuxt Color Mode
   *  @defaultValue true
   */
  colorMode?: boolean
  /**
   * Enable Nuxt Content
   * @defaultValue false
   */
  content?: boolean
  /**
   * Enable Color Transitions
   * @defaultValue false
   */
  transitions?: boolean
}

export type MocklineConfig = {
  primary?: typeof colors[number]
  canvas?: typeof colors[number]
  toast?: {
    position?: ToasterProps['position']
    duration?: number
  }
}
