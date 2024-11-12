<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

export type MainProps = {
  class?: string
}

const props = defineProps<MainProps>()

const mainClasses = computed(() => twMerge(
  'min-h-[calc(100vh-var(--header-height))]',
  props.class
))
</script>

<template>
  <main :class="mainClasses">
    <slot />
  </main>
</template>
