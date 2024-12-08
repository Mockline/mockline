<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <ol class="list-decimal pl-6 my-5">
    <slot />
  </ol>
</template>
