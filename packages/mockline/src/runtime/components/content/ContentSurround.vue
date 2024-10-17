<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

type ContentSurroundProps = {
  next?: ParsedContent
  prev?: ParsedContent
}

const props = defineProps<ContentSurroundProps>()
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between">
      <NuxtLink v-if="prev" :to="prev._path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <MIcon name="lucide:arrow-left" class="size-4" />
          <span>{{ prev.title }}</span>
        </div>
      </NuxtLink>
      <NuxtLink v-if="next" :to="next._path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <span>{{ next.title }}</span>
          <MIcon name="lucide:arrow-right" class="size-4" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
