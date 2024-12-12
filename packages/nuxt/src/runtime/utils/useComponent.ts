import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import * as components from '@mockline/themes'
import { useAppConfig } from '#imports'

export function useComponent<
  T extends keyof typeof components
>(
  componentName: T,
): {
  getClasses: (slotName?: keyof (typeof components)[T]['slots'] | 'default', overrideClass?: string) => string
} {
  const appConfig = useAppConfig()
  // @ts-expect-error - This is a valid key
  const componentConfig = computed(() => appConfig.mockline?.components?.[componentName])
  const baseClasses = (components[componentName])()

  return {
    getClasses(slotName: keyof (typeof components)[T]['slots'] | 'default' = 'default', overrideClass?: string): string {
      const base = typeof baseClasses === 'object'
        // @ts-expect-error - This is a valid key TODO: Fix this
        ? (slotName === 'default' ? baseClasses.base : baseClasses[slotName as string]) || ''
        : baseClasses || ''

      const config = typeof componentConfig.value === 'string'
        ? componentConfig.value
        : componentConfig.value?.slots?.[slotName as string] || ''

      return twMerge(base, config, overrideClass)
    }
  }
}
