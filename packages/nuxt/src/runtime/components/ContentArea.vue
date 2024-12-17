<script setup lang="ts">
import { computed } from 'vue'
import type { ContentAreaProps } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = withDefaults(defineProps<ContentAreaProps>(), {
  margin: true
})

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('contentArea', componentProps)
</script>

<template>
  <div :class="getClasses('root', props.class)">
    <slot />
  </div>
</template>

