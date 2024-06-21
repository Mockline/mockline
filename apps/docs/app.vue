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
  <Html lang="en" class="bg-canvas text-gray-12 size-full font-geist">
    <Body>
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <MToasts
        :toast-options="{
          style: {
            borderColor: 'var(--canvas-5)',
            backgroundColor: 'var(--canvas-2)'
          }
        }"
      />
    </Body>
  </Html>
</template>
