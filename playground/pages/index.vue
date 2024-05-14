<script setup lang="ts">
const components = ['button', 'nav-menu', 'switch']
</script>

<template>
  <div class="space-y-4 p-4">
    <h1 class="text-2xl font-semibold">
      Playground
    </h1>
    <ul class="space-y-4">
      <li v-for="component in components" :key="component">
        <NuxtLink :to="`/${component}`" class="text-blue-600 hover:underline">
          {{ component.charAt(0).toUpperCase() + component.slice(1) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
