import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import * as components from '@mockline/themes'
import { useAppConfig } from '#imports'

type TVReturn = {
  base: string
  [key: string]: string | undefined
}

export function useComponent<T extends keyof typeof components>(
  componentName: T,
  baseClasses: TVReturn | string
): {
  getClasses: (slotName?: string) => string
} {
  const appConfig = useAppConfig()
  // @ts-expect-error - This is a valid key
  const componentConfig = computed(() => appConfig.mockline?.components?.[componentName])

  return {
    getClasses(slotName: string = 'default'): string {
      const base = typeof baseClasses === 'object'
        ? (slotName === 'default' ? baseClasses.base : baseClasses[slotName]) || ''
        : baseClasses || ''

      const config = typeof componentConfig.value === 'string'
        ? componentConfig.value
        : componentConfig.value?.slots?.[slotName] || ''

      return twMerge(base, config)
    }
  }
}
