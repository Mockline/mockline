import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import { twMerge } from 'tailwind-merge'
import * as components from '@mockline/themes'
import { useAppConfig } from '#imports'

/**
 * Type helper to extract slot names from a component
 */
type ComponentSlots<T> = T extends { slots: infer S } ? keyof S : never

/**
 * The hook follows this logic:
 * 1. Gets base styles from the @mockline/themes component
 * 2. Applies any overrides from app.config.ts
 * 3. Merges any additional classes passed directly
 *
 * @example Basic usage with default slot
 * ```ts
 * const { getClasses } = useComponentTheme('button')
 * getClasses() // Returns base classes
 * ```
 *
 * @example Using named slots with overrides
 * ```ts
 * const { getClasses } = useComponentTheme('button')
 * getClasses('leadingIcon', 'my-custom-class')
 * ```
 *
 * @example In template usage
 * ```vue
 * <button :class="getClasses('default', props.class)">
 *   <span :class="getClasses('label')">{{ label }}</span>
 * </button>
 * ```
 *
 * @param componentName - Name of the component from @mockline/themes
 * @param componentProps - Optional props to pass to the component
 * @returns Object with getClasses function
 */
export function useComponentTheme<
  T extends keyof typeof components
>(
  componentName: T,
  componentProps?: MaybeRefOrGetter<any>
): {
  getClasses: (slotName?: ComponentSlots<(typeof components)[T]> | 'default', overrideClass?: string) => string
} {
  // Get app config for potential component style overrides
  const appConfig = useAppConfig()
  const props = computed(() => toValue(componentProps)) || {}

  // @ts-expect-error - This is a valid key
  const componentConfig = computed(() => appConfig.mockline?.components?.[componentName])

  // Get base component styles from @mockline/themes
  const ui = computed(() => {
    try {
      const baseComponent = components[componentName]

      if (typeof baseComponent !== 'function') {
        console.warn(`Component "${componentName}" is not a function`)
        return {}
      }

      return baseComponent({
        ...props.value,
        transitions: appConfig.mockline?.transitions
      })
    } catch (e) {
      console.warn(`Error computing UI for "${componentName}"`, e)
      return {}
    }
  })

  return {
    /**
     * Get computed classes for a specific slot
     *
     * @param slotName - Name of the slot or 'default' for base component
     * @param overrideClass - Optional classes to override/append
     * @returns Merged classes string
     */
    getClasses(
      slotName: ComponentSlots<(typeof components)[T]> | 'default' = 'default',
      overrideClass?: string
    ): string {
      // Get base classes for the slot
      // @ts-expect-error - This is a valid key
      const base = slotName === 'default' ? (typeof ui.value === 'string' ? ui.value : ui.value.base) : (typeof ui.value[slotName] === 'function' ? ui.value[slotName]() : ui.value[slotName])

      // Get config override classes
      const config = typeof componentConfig.value === 'string'
        ? componentConfig.value
        : componentConfig.value?.slots?.[slotName as string] || ''

      return twMerge(base, config, overrideClass)
    }
  }
}
