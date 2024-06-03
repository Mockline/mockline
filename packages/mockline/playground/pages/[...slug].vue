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
    <Page v-if="page">
      <template #right>
        <MContentToc :links="page?.body?.toc?.links" />
      </template>
      <PageBody class="p-4" prose>
        <ContentRenderer v-if="page.body" :value="page" />
      </PageBody>
      <MContentSurround :next :prev />
    </Page>
  </div>
</template>
