<script setup lang="ts">
const components = ['button', 'nav-menu', 'page', 'switch']
</script>

<template>
  <div class="space-y-4 p-4">
    <h1 class="text-gray-12 text-2xl font-semibold">
      Playground
    </h1>
    <ul class="space-y-4">
      <li v-for="component in components" :key="component">
        <NuxtLink :to="`/${component}`" class="text-blue-600 hover:underline">
          {{ component.charAt(0).toUpperCase() + component.slice(1) }}
        </NuxtLink>
      </li>
    </ul>
    <div class="space-x-4">
      <NuxtLink to="/getting-started/intro">
        <button class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Intro
        </button>
      </NuxtLink>
      <NuxtLink to="/getting-started/installation">
        <button class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Installation
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
