<script setup lang="ts">
import type { CodeProps } from '@mockline/themes'
import { computed } from 'vue'
import { useComponent } from '../../utils/useComponent'

const props = defineProps<CodeProps>()

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('proseCode', componentProps)
</script>

<template>
  <code :class="getClasses('default', props.class)">
    <slot />
  </code>
</template>
