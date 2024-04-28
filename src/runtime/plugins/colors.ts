import { computed } from 'vue'
import { defineNuxtPlugin, useAppConfig, useNuxtApp, useHead } from '#imports'

function createRootStyles(stylesConfig: Record<string, string>) {
  return Object.entries(stylesConfig).map(([name, color]) =>
    [...Array(12).keys()].map(i => `--${name}-${i+1}: var(--${color}-${i+1});`).join('\n')
  ).join('\n')
}

export default defineNuxtPlugin(() => {
  const { mockline } = useAppConfig()
  const nuxtApp = useNuxtApp()

  const rootStyle = computed(() => {
    const stylesConfig = {
      primary: mockline.primary,
      canvas: mockline.canvas
    }

    return `
    :root {
      ${createRootStyles(stylesConfig)}
    }
    `
  })

  const headData: {
    title?: string
    meta?: any[]
    link?: any[]
    script?: any[]
    style?: any[]
  } = {
    script: [],
    style: [
      {
        innerHTML: () => rootStyle.value,
        tagPriority: -2,
        id: 'mockline-colors'
      }
    ],
  }

  if (import.meta.client && nuxtApp.isHydrating && !nuxtApp.payload.serverRendered) {
    const style = document.createElement('style')
    style.innerHTML = rootStyle.value
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
