<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <p :class="props.class ?? 'my-5 leading-7'">
    <slot />
  </p>
</template>
