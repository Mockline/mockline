<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs', ['framework']))
const { mappedNavigation } = useContentNavigation(navigation)

provide('navigation', mappedNavigation)

useHead({
  script: [
    {
      type: 'module',
      src: 'https://genii-script.tolk.ai/lightchat.js',
      id: 'lightchat-bot',
      'project-id': '8094e56e-837e-4f12-903e-fda81bbe0e7c',
      template: 'widget'
    }
  ]
})
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

html[data-framework="nuxt"] .vue-only,
html[data-framework="vue"] .nuxt-only,
html[data-framework="next"] .next-only,
html[data-framework="react"] .react-only {
  display: none;
}
</style>
