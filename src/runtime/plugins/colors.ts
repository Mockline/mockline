import { computed } from 'vue'
import { defineNuxtPlugin, useAppConfig, useNuxtApp, useHead } from '#imports'

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const nuxtApp = useNuxtApp()

  const root = computed(() => {
    const primary: string = appConfig.mockline.primary

    return `
      :root {
       --primary-1: var(--${primary}-1);
       --primary-2: var(--${primary}-2);
       --primary-3: var(--${primary}-3);
       --primary-4: var(--${primary}-4);
       --primary-5: var(--${primary}-5);
       --primary-6: var(--${primary}-6);
       --primary-7: var(--${primary}-7);
       --primary-8: var(--${primary}-8);
       --primary-9: var(--${primary}-9);
       --primary-10: var(--${primary}-10);
       --primary-11: var(--${primary}-11);
       --primary-12: var(--${primary}-12);
      }`
  })

  // Head
  const headData: any = {
    style: [
      {
        innerHTML: () => root.value,
        tagPriority: -2,
        id: 'mockline-colors'
      }
    ]
  }

  if (import.meta.client && nuxtApp.isHydrating && !nuxtApp.payload.serverRendered) {
    const style = document.createElement('style')

    style.innerHTML = root.value
    style.setAttribute('data-mockline-colors', '')
    document.head.appendChild(style)

    headData.script = [
      {
        innerHTML: 'document.head.removeChild(document.querySelector(\'[data-mockline-colors]\'))'
      }
    ]
  }

  useHead(headData)
})
