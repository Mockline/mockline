<script setup lang="ts">
const components = ['button']
</script>

<template>
  <ul>
    <li v-for="component in components" :key="component">
      <NuxtLink :to="`/${component}`" class="text-blue-600 hover:underline">
        {{ component }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>

</style>
