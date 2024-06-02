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

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <div>
    <div class="bg-canvas-3 flex items-center justify-between p-4">
      <NuxtLink to="/" class="i-custom-mockline size-6" />
      <MThemeToggle />
    </div>
    <Main>
      <Page>
        <template #right>
          <div class="flex flex-col gap-2">
            <h3 class="text-gray-12 text-2xl font-bold">
              Table of Contents
            </h3>
            <ul class="list-none">
              <li v-for="link in page.body.toc.links" :key="link.id">
                <span>{{ link.text }}</span>
              </li>
            </ul>
          </div>
        </template>
        <div>
          <slot />
        </div>
      </Page>
    </Main>
  </div>
</template>
