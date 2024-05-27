<script setup lang="ts">

</script>

<template>
  <div class="py-16 text-center">
    <h1 class="font-instrument text-3xl italic">
      <ContentSlot :use="$slots.headline" unwrap="p" />
    </h1>
    <p class="text-lg">
      <ContentSlot :use="$slots.subhead" />
    </p>
  </div>
</template>

<style scoped>

</style>
