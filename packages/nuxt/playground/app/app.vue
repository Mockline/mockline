<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content', ['framework']))
provide('navigation', navigation)
</script>

<template>
  <Html>
    <NuxtLoadingIndicator />
    <MApp class="font-geist">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </MApp>
    <MToasts close-button />
  </Html>
</template>
