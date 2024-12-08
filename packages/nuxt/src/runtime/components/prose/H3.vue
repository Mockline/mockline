<script setup lang="ts">
import { proseH3, type ProseH3Props } from '@mockline/themes'

const props = defineProps<ProseH3Props>()
</script>

<template>
  <h3 :id :class="proseH3({ class: (props.class || '').split(',').join(' ') })">
    <slot />
  </h3>
</template>
