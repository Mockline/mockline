<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content', ['framework']))
provide('navigation', navigation)
</script>

<template>
  <Html>
    <NuxtLoadingIndicator />
    <MApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </MApp>
    <MToasts close-button />
  </Html>
</template>

<style>
@import "tailwindcss";
@import "mockline";

@source "../content";

@theme {
  --font-geist: 'Geist', sans-serif;
}

:root {
  @apply font-geist;
}

html[data-framework="nuxt"] .vue-only,
html[data-framework="vue"] .nuxt-only {
  display: none;
}
</style>
