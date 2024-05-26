<script setup lang="ts">
const { page } = useContent()

useContentHead(page)

const items = [
  {
    title: 'Home',
    path: '/',
    slot: 'home'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]
</script>

<template>
  <Html lang="en" class="text-main font-geist bg-zinc-950 transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800">
    <Body class="bg-canvas text-gray-12 h-screen">
      <div>
        <MNavMenu :items class="absolute top-0 z-50">
          <template #home>
            <div class="flex h-40 w-96 items-center justify-center">
              Test
            </div>
          </template>
        </MNavMenu>
        <slot />
      </div>
    </Body>
  </Html>
</template>
