import type { Color } from './colors'
import icons from './icons'

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
   * Force the import of prose components even if @nuxtjs/mdc or @nuxt/content is not installed
   * @defaultValue false
   */
  mdc?: boolean;
  /**
   * Enable Color Transitions
   * @defaultValue false
   */
  transitions?: boolean
  /**
   * Import components or not
   * @defaultValue true
   */
  components?: boolean
  /**
   * Import composables or not
   * @defaultValue true
   */
  composables?: boolean
}

export type MocklineConfig = {
  colors?: {
    primary?: Color
    secondary?: Color
    success?: Color
    error?: Color
    warning?: Color
    info?: Color
    neutral?: Color
  }
  toast?: {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
    duration?: number
  },
  icons?: typeof icons
}
