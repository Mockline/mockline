<script setup lang="ts">
import { type ProseH3Props } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = defineProps<ProseH3Props>()

const { getClasses } = useComponent('proseH3')
</script>

<template>
  <h3 :id :class="getClasses('default', props.class)">
    <slot />
  </h3>
</template>
