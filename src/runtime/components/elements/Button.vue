<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

export type ButtonProps = {
  /** Button label */
  label: string;
  /** Button class */
  class?: string;
  /** Block button */
  block?: boolean;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const props = defineProps<ButtonProps>()

const defaultClass = 'bg-blue-600 px-2 py-1 rounded text-white'

const block = computed(() => props.block ? 'w-full' : 'w-fit')

const size = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm'
    case 'md':
      return 'text-md'
    case 'lg':
      return 'text-lg'
    case 'xl':
      return 'text-xl'
    default:
      return 'text-md'
  }
})

const buttonClass = computed(() => twMerge(defaultClass, props.class, block.value, size.value))
</script>

<template>
  <component :is="'button'" :class="buttonClass" :type>
    {{ props.label }}
  </component>
</template>

<style scoped>

</style>
