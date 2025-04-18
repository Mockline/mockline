<script setup lang="ts">
import { type ProseH2Props } from '@mockline/themes'
import { useComponent } from '../../utils'

const props = defineProps<ProseH2Props>()

const { getClasses } = useComponent('proseH2')
</script>

<template>
  <h2 :id :class="getClasses('default', props.class)">
    <slot />
  </h2>
</template>
