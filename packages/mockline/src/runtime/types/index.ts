import type { CollectionNames, IconsPluginOptions } from '@egoist/tailwindcss-icons'
import type { Color } from '../utils/colors'

export * from '../components/elements/Button.vue'

export type DeepPartial<T> = Partial<{
  [P in keyof T]: DeepPartial<T[P]> | { [key: string]: string | object }
}>

export type ModuleOptions = {
  /**
   * Prefix for all components
   */
  prefix?: string,
  /**
   * The icon collections to use
   * @default ['heroicons', 'lucide']
   */
  icons: CollectionNames[] | 'all' | IconsPluginOptions,
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
