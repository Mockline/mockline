<script setup lang="ts" generic="T extends ContentSurroundLink">
import type { ContentNavigationItem } from '@nuxt/content'

export type ContentSurroundLink = {
  description?: string
  icon?: string
} & ContentNavigationItem

export type ContentSurroundProps<T> = {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * The icon displayed in the prev link.
   * @defaultValue appConfig.ui.icons.arrowLeft
   */
  prevIcon?: string
  /**
   * The icon displayed in the next link.
   * @defaultValue appConfig.ui.icons.arrowRight
   */
  nextIcon?: string
  surround?: T[]
  class?: any
}

const { surround } = defineProps<ContentSurroundProps<T>>()
console.log(surround)

const prev = surround?.[0]
const next = surround?.[1]
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between">
      <NuxtLink v-if="prev" :to="prev.path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <MIcon name="lucide:arrow-left" class="size-4" />
          <span>{{ prev.title }}</span>
        </div>
      </NuxtLink>
      <NuxtLink v-if="next" :to="next.path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <span>{{ next.title }}</span>
          <MIcon name="lucide:arrow-right" class="size-4" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
