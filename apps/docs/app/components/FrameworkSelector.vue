<script setup lang="ts">
const { framework, frameworks } = useSharedData()
</script>

<template>
  <div class="flex items-center justify-between">
    <div
      v-for="_framework in frameworks"
      :key="_framework.value"
      class="flex items-center gap-1 text-xs cursor-pointer p-1 rounded-md"
      :class="[framework === _framework.value ? 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700' : 'border border-transparent']"
      @click="_framework.onSelect"
    >
      <Icon :name="_framework.icon" />
    </div>
  </div>
</template>

<style scoped>

</style>
