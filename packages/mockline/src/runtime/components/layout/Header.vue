<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { twMerge } from 'tailwind-merge'
import { useElementSize } from '@vueuse/core'

export type HeaderProps = {
  class?: string,
  sticky?: boolean,
}

const props = withDefaults(defineProps<HeaderProps>(), {
  sticky: false,
})

const headerSize = ref(null)
const { height } = useElementSize(headerSize)

const headerClasses = computed(() => twMerge(
  'flex items-center justify-between w-full h-[var(--header-height)] p-4 bg-canvas-3',
  props.sticky && 'sticky top-0 z-10',
  props.class,
))

onMounted(() => {
  document.documentElement.style.setProperty('--header-height', `${height.value}px`)
})
</script>

<template>
  <component :is="'header'" ref="headerSize" :class="headerClasses">
    <slot name="left" />
    <slot name="center" />
    <slot name="right" />
  </component>
</template>

<style scoped>

</style>
