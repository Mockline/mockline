<script setup lang="ts">
const { seo, cover } = useAppConfig()

useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogUrl: cover,
  ogImage: cover,
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: cover,
  twitterCard: 'summary_large_image'
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

defineOgImage({
  component: 'OGImageHome',
  props: {
    title: seo.title,
    tag: 'Home'
  }
})
</script>

<template>
  <Html lang="en">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>
