<script setup lang="ts">
import MDCSlot from '@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue'

defineProps({
  type: String,
  icon: String,
  to: String,
})
</script>

<template>
  <div>
    <div class="rounded-md bg-neutral-100 p-4 text-gray-900 dark:border-gray-800 dark:border-opacity-25 dark:bg-neutral-950 dark:text-white dark:shadow-md">
      <div class="flex items-center gap-4">
        <div v-if="icon" class="text-2xl">
          <MIcon :name="icon" />
        </div>
        <div>
          <MDCSlot unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>
