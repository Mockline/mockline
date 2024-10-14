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
  codeBlock: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="relative" :class="!!filename && '[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5'">
    <div
      v-if="filename && !hideHeader"
      class="not-prose relative flex items-center gap-1.5 rounded-t-md bg-neutral-100 px-4 py-3 dark:bg-neutral-800"
    >
      <ProseCodeIcon :icon :filename />

      <span class="text-sm text-neutral-950 dark:text-neutral-100">
        {{ filename }}
      </span>
    </div>
    <ProseCodeButton :code />

    <div class="not-prose bg-neutral-50 px-4 py-3 text-sm dark:bg-neutral-900">
      <slot />
    </div>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
