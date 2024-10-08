<script setup lang="ts">

</script>

<template>
  <aside class="sticky top-[--header-height] overflow-y-auto">
    <div class="relative">
      <slot />

      <slot name="bottom" />
    </div>
  </aside>
</template>
