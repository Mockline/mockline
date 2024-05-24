<script setup lang="ts">
const items = [
  {
    title: 'Home',
    path: '/',
    slot: 'home'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]
</script>

<template>
  <div class="bg-canvas h-screen">
    <MNavMenu :items class="absolute top-0 z-50">
      <template #home>
        <div class="flex h-40 w-96 items-center justify-center">
          Test
        </div>
      </template>
    </MNavMenu>
  </div>
</template>
