<script setup lang="ts">
defineProps({
  type: String,
  icon: String,
  to: String,
})
</script>

<template>
  <div>
    <div class="bg-canvas-8 rounded-md p-4 text-white">
      <div class="flex items-center gap-4">
        <div class="text-2xl">
          <span :class="icon" />
        </div>
        <div>
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
