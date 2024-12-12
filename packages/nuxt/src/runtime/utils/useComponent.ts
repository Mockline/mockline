import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import * as components from '@mockline/themes'
import { useAppConfig } from '#imports'

type TVReturn = {
  base: string
  [key: string]: string | undefined
}

export function useComponent<
  T extends keyof typeof components,
  TSlots =(typeof components)[T]['slots']
>(
  componentName: T,
  baseClasses: ReturnType<(typeof components)[T]>
): {
  getClasses: (slotName?: keyof TSlots | 'default') => string
} {
  const appConfig = useAppConfig()
  // @ts-expect-error - This is a valid key
  const componentConfig = computed(() => appConfig.mockline?.components?.[componentName])

  return {
    getClasses(slotName: keyof TSlots | 'default' = 'default'): string {
      const base = typeof baseClasses === 'object'
        // @ts-expect-error - This is a valid key
        ? (slotName === 'default' ? baseClasses.base : baseClasses[slotName as string]) || ''
        : baseClasses || ''

      const config = typeof componentConfig.value === 'string'
        ? componentConfig.value
        : componentConfig.value?.slots?.[slotName as string] || ''

      return twMerge(base, config)
    }
  }
}
