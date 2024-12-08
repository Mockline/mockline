<script setup lang="ts">
import { proseH1, type ProseH1Props } from '@mockline/themes'

const props = defineProps<ProseH1Props>()
</script>

<template>
  <h1 :id :class="proseH1({ class: (props.class || '').split(',').join(' ') })">
    <slot />
  </h1>
</template>
