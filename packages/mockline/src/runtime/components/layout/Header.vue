<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { twMerge } from 'tailwind-merge'

export type HeaderProps = {
  class?: string
  height?: number
}

const props = withDefaults(defineProps<HeaderProps>(), {
  height: 16
})

const headerClasses = computed(() => twMerge(
  'flex items-center justify-between w-full h-[var(--header-height)] p-4 bg-canvas-3',
  props.class,
))

onMounted(() => {
  document.documentElement.style.setProperty('--header-height', props.height + 'px')
})
</script>

<template>
  <component :is="'header'" :class="headerClasses">
    <slot name="left" />
    <slot name="center" />
    <slot name="right" />
  </component>
</template>

<style scoped>

</style>
