import { createSharedComposable } from '@vueuse/core'

type UseSharedData = {
  framework: Ref<string>
  frameworks: ComputedRef<{ label: string; icon: string; value: string; onSelect: () => void; active: boolean }[]>
}

function useSharedDataBase(): UseSharedData {
  const framework = useCookie('mockline-framework', { default: () => 'nuxt' })
  const frameworks = computed(() => [
    {
      label: 'Nuxt',
      icon: 'i-logos-nuxt-icon',
      value: 'nuxt',
      onSelect: (): string => framework.value = 'nuxt'
    }, {
      label: 'Vue',
      icon: 'i-logos-vue',
      value: 'vue',
      onSelect: (): string => framework.value = 'vue'
    }
  ].map(f => ({ ...f, active: framework.value === f.value })))

  return {
    framework,
    frameworks,
  }
}

export const useSharedData = createSharedComposable(useSharedDataBase)
