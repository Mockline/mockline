
<script setup lang="ts">
const props = defineProps<{
  id?: string
  class?: any
}>()
</script>

<template>
  <h2 :id class="text-2xl text-[var(--ui-text-highlighted)] font-bold mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a]:focus-visible:outline-[var(--ui-primary)] [&>a>code]:border-dashed hover:[&>a>code]:border-[var(--ui-primary)] hover:[&>a>code]:text-[var(--ui-primary)] [&>a>code]:text-xl/7 [&>a>code]:font-bold">
    <slot />
  </h2>
</template>
