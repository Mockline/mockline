<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'icon',
      href: 'favicon-light.ico',
      media: '(prefers-color-scheme: light)'
    },
    {
      rel: 'icon',
      href: 'favicon-dark.ico',
      media: '(prefers-color-scheme: dark)'
    }
  ]
})
</script>

<template>
  <div>
    <div class="bg-canvas-3 flex items-center justify-between p-4">
      <NuxtLink to="/" class="i-custom-mockline size-6" />
      <MThemeToggle />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
