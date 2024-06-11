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
    <Header :height="16">
      <template #left>
        <NuxtLink to="/" class="i-custom-mockline size-6" />
      </template>
      <template #right>
        <MThemeToggle />
      </template>
    </Header>
    <ThemeSelector />
    <Main>
      <slot />
    </Main>
  </div>
</template>
