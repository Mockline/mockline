<script setup lang="ts">

</script>

<template>
  <div>
    <NuxtLink to="/" class="text-blue-600 hover:underline">
      Home
    </NuxtLink>
    <div>
      <h3>Button</h3>
      <Button label="test" size="sm" @click="() => console.log('click')" />
    </div>
  </div>
</template>

<style scoped>

</style>
