<script setup lang="ts">
import { type ProsePProps } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProsePProps>()

const { getClasses } = useComponentTheme('proseP')
</script>

<template>
  <p :class="getClasses('default', props.class)">
    <slot />
  </p>
</template>
