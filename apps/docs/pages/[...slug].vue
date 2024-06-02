<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '%s - Mockline',
  title: page.value.title,
  ogTitle: `${page.value.title} - Mockline`,
  description: page.value.description,
  ogDescription: page.value.description
})

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
    <div v-if="page">
      <PageBody class="p-4" prose>
        <ContentRenderer v-if="page.body" :value="page" />
      </PageBody>
    </div>
    <MContentSurround :prev :next />
  </div>
</template>
