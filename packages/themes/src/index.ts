import * as components from './components'
import * as types from './types'

export * from './components'
export * from './types'

export { components }
export { types }

/**
 * Type helper to extract slot names from a component
 */
export type ComponentSlots<T> = T extends { slots: infer S } ? keyof S : never

type ComponentConfig<T> = {
  slots?: T extends { slots: any }
    ? Partial<Record<ComponentSlots<T>, string>>
    : never
} | string

/**
 * Every component theme
 */
export type Themes = {
  [K in keyof typeof components]?: ComponentConfig<(typeof components)[K]>
}
