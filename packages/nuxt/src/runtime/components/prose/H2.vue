<script setup lang="ts">
import { type ProseH2Props } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProseH2Props>()

const { getClasses } = useComponentTheme('proseH2')
</script>

<template>
  <h2 :id :class="getClasses('default', props.class)">
    <slot />
  </h2>
</template>
