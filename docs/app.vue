<script setup lang="ts">
const { seo } = useAppConfig()

useSeoMeta({
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogUrl: '/social-preview.jpg',
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: '/social-preview.jpg'
})

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>
