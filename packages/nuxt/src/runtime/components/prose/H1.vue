<script setup lang="ts">
const props = defineProps<{
  id?: string
  class?: any
}>()
</script>

<template>
  <h1 :id class="text-4xl text-[var(--ui-text-highlighted)] font-bold mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] lg:scroll-mt-[var(--ui-header-height)]">
    <slot />
  </h1>
</template>
