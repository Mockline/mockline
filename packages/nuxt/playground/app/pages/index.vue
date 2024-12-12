<script setup lang="ts">
const components = ['button', 'nav-menu', 'page']
const contentComponents = ['callout', 'typography']
</script>

<template>
  <div class="space-y-4 p-4">
    <h1 class="text-gray-12 text-2xl font-semibold">
      Playground
    </h1>
    <ul class="space-y-4">
      <li v-for="component in components" :key="component">
        <NuxtLink :to="`/playground/${component}`" class="text-blue-600 hover:underline">
          {{ component.charAt(0).toUpperCase() + component.slice(1) }}
        </NuxtLink>
      </li>
    </ul>
    <h2 class="text-gray-12 text-xl font-semibold">
      Content Components
    </h2>
    <ul class="space-y-4">
      <li v-for="component in contentComponents" :key="component">
        <NuxtLink :to="`/components/${component}`" class="text-blue-600 hover:underline">
          {{ component.charAt(0).toUpperCase() + component.slice(1) }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
