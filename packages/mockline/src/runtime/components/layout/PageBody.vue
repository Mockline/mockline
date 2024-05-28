<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

export type PageBodyProps = {
  class?: string
  prose?: boolean
}

const props = withDefaults(defineProps<PageBodyProps>(), {
  prose: false
})

const pageBodyClasses = computed(() => twMerge(
  props.prose && 'prose prose-primary dark:prose-invert max-w-none',
  !props.prose && 'flex flex-col gap-4',
  props.class
))
</script>

<template>
  <div :class="pageBodyClasses">
    <slot />
  </div>
</template>
