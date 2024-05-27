<script setup lang="ts">
const items = [
  {
    title: 'Home',
    path: '/',
    slot: 'home'
  },
  {
    title: 'Docs',
    path: '/getting-started',
  },
]
</script>

<template>
  <MNavMenu :items class="absolute top-4 z-50" color="white">
    <template #home>
      <div class="flex h-40 w-96 items-center justify-center">
        Test
      </div>
    </template>
    <template #leading>
      <NuxtLink to="/" class="i-custom-mockline text-gray-12 size-8" />
    </template>
    <template #trailing>
      <div class="flex items-center gap-3">
        <MThemeToggle />
        <MButton size="sm" label="Waitlist" class="ring-gray-1 ring-2" />
      </div>
    </template>
  </MNavMenu>
</template>

