<script setup lang="ts">
import { proseCode, type CodeProps } from '@mockline/themes'

const props = defineProps<CodeProps>()
</script>

<template>
  <code :class="proseCode({ class: (props.class || '').split(',').join(' '), color: props.color })">
    <slot />
  </code>
</template>
