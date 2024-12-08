<script setup lang="ts">
import { proseH2, type ProseH2Props } from '@mockline/themes'

const props = defineProps<ProseH2Props>()
</script>

<template>
  <h2 :id :class="proseH2({ class: (props.class || '').split(',').join(' ') })">
    <slot />
  </h2>
</template>
