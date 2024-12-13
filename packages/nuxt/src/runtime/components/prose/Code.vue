<script setup lang="ts">
import type { CodeProps } from '@mockline/themes'
import { computed } from 'vue'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<CodeProps>()

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponentTheme('proseCode', componentProps)
</script>

<template>
  <code :class="getClasses('default', props.class)">
    <slot />
  </code>
</template>
