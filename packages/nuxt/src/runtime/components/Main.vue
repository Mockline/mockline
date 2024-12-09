<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

export type MainProps = {
  class?: string
}

const props = defineProps<MainProps>()

const mainClasses = computed(() => twMerge(
  'h-full',
  props.class
))
</script>

<template>
  <main :class="mainClasses">
    <slot />
  </main>
</template>
