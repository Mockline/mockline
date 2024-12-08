<script setup lang="ts">
import { proseH4, type ProseH4Props } from '@mockline/themes'

const props = defineProps<ProseH4Props>()
</script>

<template>
  <h4 :id :class="proseH4({ class: (props.class || '').split(',').join(' ') })">
    <slot />
  </h4>
</template>
