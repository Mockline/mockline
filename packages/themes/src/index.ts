import * as components from './components'

export * from './components'

/**
 * Type helper to extract slot names from a component
 */
export type ComponentSlots<T> = T extends { slots: infer S } ? keyof S : never

type ComponentConfig<T> = {
  slots?: T extends { slots: any }
    ? Partial<Record<ComponentSlots<T>, string>>
    : never
} | string

export type Themes = {
  [K in keyof typeof components]?: ComponentConfig<(typeof components)[K]>
}
