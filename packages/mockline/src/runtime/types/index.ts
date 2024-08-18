import type { Color } from '../utils/colors'

export * from '../components/elements/Button.vue'

export type ModuleOptions = {
  /**
   * Prefix for all components
   */
  prefix?: string,
  /**
   * Enable Nuxt Content
   * @default false
   */
  content?: boolean
  /**
   * The colors to use
   */
  colors?: Color[]
  /**
   * Enable Color Transitions
   * @default false
   */
  transitions?: boolean
}
