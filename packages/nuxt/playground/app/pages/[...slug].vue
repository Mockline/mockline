<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

const route = useRoute()

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryCollectionItemSurroundings('content', route.path, {
  fields: ['description']
}))

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))

const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const breadcrumb = computed(() => mapContentNavigation(findPageBreadcrumb(navigation?.value, page.value)).map(({ icon, ...link }) => link))

const headline = findPageHeadline(navigation.value, page?.value)
</script>

<template>
  <MPage v-if="page">
    <template #left>
      <MAside class="p-4">
        <MContentNavigationTree v-if="navigation" :links="navigation" />
      </MAside>
    </template>
    <template #right>
      <MAside class="p-4">
        <MContentToc :links="page?.body?.toc?.links" />
      </MAside>
    </template>
    <MPageHeader :title="page.title" :description="page.description" :headline />
    <MPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />
    </MPageBody>
    <MContentSurround :next="surround[1]" :prev="surround[0]" />
  </MPage>
</template>
