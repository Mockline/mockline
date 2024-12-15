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
  --font-mono: 'Geist Mono', sans-serif;
}

:root {
  @apply font-geist;
}
</style>
