<script setup lang="ts">
import { type ProseH4Props } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProseH4Props>()

const { getClasses } = useComponentTheme('proseH4')
</script>

<template>
  <h4 :id :class="getClasses('default', props.class)">
    <slot />
  </h4>
</template>
