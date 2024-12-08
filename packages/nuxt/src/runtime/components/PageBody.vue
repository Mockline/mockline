<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

export type PageBodyProps = {
  class?: string
}

const props = defineProps<PageBodyProps>()
</script>

<template>
  <div :class="twMerge('flex flex-col gap-4 w-full', props.class)">
    <slot />
  </div>
</template>
