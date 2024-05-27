<script setup lang="ts">
const { page } = useContent()

useContentHead(page)

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'mockline-app-icon-dark.png'
    }
  ]
})
</script>

<template>
  <Html lang="en" class="text-main font-geist bg-zinc-950 transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800">
    <Body class="bg-canvas text-gray-12 h-screen">
      <div>
        <Navbar />
        <slot />
      </div>
    </Body>
  </Html>
</template>
