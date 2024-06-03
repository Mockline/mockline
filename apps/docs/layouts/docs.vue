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
          <MContentToc :links="page?.body?.toc?.links" />
        </template>
        <div>
          <slot />
        </div>
      </Page>
    </Main>
  </div>
</template>
