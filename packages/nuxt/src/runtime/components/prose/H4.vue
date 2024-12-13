<script setup lang="ts">
import { type ProseH4Props } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = defineProps<ProseH4Props>()

const { getClasses } = useComponent('proseH4')
</script>

<template>
  <h4 :id :class="getClasses('default', props.class)">
    <slot />
  </h4>
</template>
