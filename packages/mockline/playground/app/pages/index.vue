<script setup lang="ts">
const components = ['button', 'nav-menu', 'page']
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
        <MButton label="Intro" color="blue" />
      </NuxtLink>
      <NuxtLink to="/getting-started/installation">
        <MButton label="Installation" color="blue" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
