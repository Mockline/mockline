<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

export type ButtonProps = {
  /** Button label */
  label: string;
  /** Button class */
  class?: string;
  /** Block button */
  block?: boolean;
}

const props = defineProps<ButtonProps>()

const defaultClass = 'bg-blue-600 px-2 py-1 rounded text-white'

const block = props.block ? 'w-full' : 'w-fit'

const buttonClass = twMerge(defaultClass, props.class, block)
</script>

<template>
  <div>
    <div :class="buttonClass">
      {{ props.label }}
    </div>
  </div>
</template>

<style scoped>

</style>
