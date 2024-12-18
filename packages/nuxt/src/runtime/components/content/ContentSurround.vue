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
   * @defaultValue appConfig.mockline.icons.arrowLeft
   */
  prevIcon?: string
  /**
   * The icon displayed in the next link.
   * @defaultValue appConfig.mockline.icons.arrowRight
   */
  nextIcon?: string
  surround?: T[]
  class?: any
}

const { surround } = defineProps<ContentSurroundProps<T>>()

const prev = surround?.[0]
const next = surround?.[1]
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between">
      <NuxtLink v-if="prev" :to="prev.path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <Icon name="lucide:arrow-left" class="size-4" />
          <div class="flex flex-col">
            <span>{{ prev.title }}</span>
            <div class="text-xs text-neutral-500 dark:text-neutral-400">
              {{ prev.description }}
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink v-if="next" :to="next.path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <div class="flex flex-col items-end">
            <span>{{ next.title }}</span>
            <div class="text-xs text-neutral-500 dark:text-neutral-400">
              {{ next.description }}
            </div>
          </div>
          <Icon name="lucide:arrow-right" class="size-4" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
