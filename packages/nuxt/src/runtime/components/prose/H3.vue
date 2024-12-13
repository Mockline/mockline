<script setup lang="ts">
import { type ProseH3Props } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProseH3Props>()

const { getClasses } = useComponentTheme('proseH3')
</script>

<template>
  <h3 :id :class="getClasses('default', props.class)">
    <slot />
  </h3>
</template>
