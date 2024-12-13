import type { Themes } from '@mockline/themes'
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
   * Prose components are auto-imported if @nuxtjs/mdc or @nuxt/content is installed, set false to disable
   * @defaultValue true
   */
  mdc?: boolean;
  /**
   * Nuxt Content related components are auto-imported if @nuxt/content is installed, set false to disable
   * @defaultValue true
   */
  content?: boolean
  /**
   * Enable Color Transitions
   * @defaultValue true
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
    danger?: Color
    neutral?: Color
  },
  transitions?: true,
  toast?: {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
    duration?: number
  },
  icons?: typeof icons,
  components?: Themes
}
