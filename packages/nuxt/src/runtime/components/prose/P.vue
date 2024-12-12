<script setup lang="ts">
import { type ProsePProps } from '@mockline/themes'
import { useComponent } from '../../utils/useComponent'

const props = defineProps<ProsePProps>()

const { getClasses } = useComponent('proseP')
</script>

<template>
  <p :class="getClasses('default', props.class)">
    <slot />
  </p>
</template>
