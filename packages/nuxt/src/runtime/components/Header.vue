<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { twMerge } from 'tailwind-merge'
import { useElementSize } from '@vueuse/core'

export type HeaderProps = {
  class?: string,
  sticky?: boolean,
  glass?: boolean,
}

const props = withDefaults(defineProps<HeaderProps>(), {
  sticky: false,
  glass: false,
})

const header = ref(null)
const { height } = useElementSize(header)

const headerClasses = computed(() => twMerge(
  'flex items-center justify-between w-full h-[var(--header-height)] p-4 bg-[var(--ui-bg)]',
  props.sticky && 'sticky top-0 z-10',
  props.glass && 'backdrop-blur bg-neutral/50',
  props.class,
))

onMounted(() => {
  document.documentElement.style.setProperty('--header-height', `${height.value}px`)
})
</script>

<template>
  <component :is="'header'" ref="header" :class="headerClasses">
    <slot name="left" />
    <slot name="center" />
    <slot name="right" />
  </component>
</template>

<style scoped>

</style>
