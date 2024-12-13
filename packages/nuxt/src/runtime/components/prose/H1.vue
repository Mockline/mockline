<script setup lang="ts">
import { type ProseH1Props } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProseH1Props>()

const { getClasses } = useComponentTheme('proseH1')
</script>

<template>
  <h1 :id :class="getClasses('default', props.class)">
    <slot />
  </h1>
</template>
