<script setup lang="ts">
function formatTitle(title: string) {
  return title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<template>
  <div class="flex flex-col gap-2 p-4">
    <NuxtLink to="/" class="text-blue-600 hover:underline">
      Home
    </NuxtLink>
    <div class="flex flex-col gap-2">
      <h3 class="text-gray-12 text-2xl font-bold">
        {{ formatTitle($route.name) }}
      </h3>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
