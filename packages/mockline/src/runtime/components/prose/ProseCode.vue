<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  code: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: undefined
  },
  language: {
    type: String,
    default: undefined
  },
  hideHeader: {
    type: Boolean,
    default: false
  },
  filename: {
    type: String,
    default: undefined
  },
  highlights: {
    type: Array as PropType<number[]>,
    default: undefined
  },
  meta: {
    type: String,
    default: undefined
  },
})
</script>

<template>
  <div class="relative my-5 group" :class="filename ? '[&>pre]:rounded-t-none [&>pre]:my-0 my-5' : ''">
    <div v-if="filename && !hideHeader" class="flex items-center gap-1.5 border border-neutral-elevated bg-neutral-elevated border-b-0 relative rounded-t-md px-4 py-3">
      <ProseCodeIcon :icon="icon" :filename="filename" class="size-4 shrink-0" />

      <span class="text-sm/6">{{ filename }}</span>
    </div>

    <ProseCodeButton :code />

    <slot />
  </div>
</template>

