<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

const [prev, next] = await queryContent()
  .where({
    _extension: 'md',
    _path: {
      $exists: true,
    },
    navigation: {
      $ne: false
    },
  })
  .only(['title', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
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
            <MContentToc :links="page?.body?.toc?.links" />
          </div>
        </template>
        <div>
          <slot />
        </div>
        <MContentSurround :next :prev />
      </Page>
    </Main>
  </div>
</template>
