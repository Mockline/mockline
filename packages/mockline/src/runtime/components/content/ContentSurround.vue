<script setup lang="ts">
import type { PropType } from 'vue'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
  next: {
    type: Object as PropType<ParsedContent>,
    default: null
  },
  prev: {
    type: Object as PropType<ParsedContent>,
    default: null
  }
})
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between">
      <NuxtLink v-if="prev" :to="prev._path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <span class="i-lucide-arrow-left size-4" />
          <span>{{ prev.title }}</span>
        </div>
      </NuxtLink>
      <NuxtLink v-if="next" :to="next._path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <span>{{ next.title }}</span>
          <span class="i-lucide-arrow-right size-4" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
