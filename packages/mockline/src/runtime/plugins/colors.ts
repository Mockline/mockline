import { computed } from 'vue'
import { generateColor } from '../utils/colors'
import { defineNuxtPlugin, useAppConfig, useNuxtApp, useHead } from '#imports'

export default defineNuxtPlugin(() => {
  const { mockline } = useAppConfig()
  const nuxtApp = useNuxtApp()

  const root = computed(() => {
    return `:root {
  ${ generateColor('primary', mockline.primary) }
  ${ generateColor('canvas', mockline.canvas) }
  --color-primary-DEFAULT: var(--color-primary-9);
  --color-canvas-DEFAULT: var(--color-canvas-1);
}
@media (prefers-color-scheme: dark) {
  --color-primary-DEFAULT: var(--color-primary-9);
  --color-canvas-DEFAULT: var(--color-canvas-1);
}
`
  })

  const headData = {
    style: [
      {
        innerHTML: (): string => root.value,
        tagPriority: -2,
        id: 'mockline-colors',
        type: 'text/css'
      }
    ],
  }

  if (import.meta.client && nuxtApp.isHydrating && !nuxtApp.payload.serverRendered) {
    const style = document.createElement('style')
    style.innerHTML = root.value
    style.setAttribute('data-mockline-colors', '')
    document.head.appendChild(style)

    headData.script = [
      {
        innerHTML: 'document.head.removeChild(document.querySelector("[data-mockline-colors]"))'
      }
    ]
  }

  useHead(headData)
})
