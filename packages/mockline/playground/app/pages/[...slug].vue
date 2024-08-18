<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'
import { splitByCase, upperFirst } from 'scule'
import type { ParsedContent } from '@nuxt/content/types'

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

const { data: nav } = await useAsyncData('navigation', () => fetchContentNavigation())

function findPageHeadline(page: ParsedContent): string {
  return page._dir?.title
    ? page._dir.title
    : splitByCase(page._dir)
      .map((p: string) => upperFirst(p))
      .join(' ')
}

const headline = findPageHeadline(page.value)
</script>

<template>
  <Page v-if="page">
    <template #left>
      <Aside class="p-4">
        <MContentNavigationTree :links="nav" />
      </Aside>
    </template>
    <template #right>
      <MContentToc :links="page?.body?.toc?.links" class="p-4" />
    </template>
    <ThemeSelector />
    <PageHeader :title="page.title" :description="page.description" :links="page.links" :headline />
    <PageBody class="p-4" prose>
      <ContentRenderer v-if="page.body" :value="page" />
    </PageBody>
    <MContentSurround :next :prev />
  </Page>
</template>
