
<script setup lang="ts">
const props = defineProps<{
  id?: string
  class?: any
}>()
</script>

<template>
  <h3 :id class="text-xl text-[var(--ui-text-highlighted)] font-bold mt-8 mb-3 scroll-mt-[calc(32px+45px+var(--ui-header-height))] lg:scroll-mt-[calc(32px+var(--ui-header-height))] [&>a]:focus-visible:outline-[var(--ui-primary)] [&>a>code]:border-dashed hover:[&>a>code]:border-[var(--ui-primary)] hover:[&>a>code]:text-[var(--ui-primary)] [&>a>code]:text-lg/6 [&>a>code]:font-bold">
    <slot />
  </h3>
</template>
