<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

type ContentSurroundProps = {
  next?: ContentNavigationItem
  prev?: ContentNavigationItem
}

const props = defineProps<ContentSurroundProps>()
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
