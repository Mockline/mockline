<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()
const { framework, frameworks } = useSharedData()

definePageMeta({
  layout: 'docs'
})

const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

if (!import.meta.prerender) {
  // Redirect to the correct framework version if the page is not the current framework
  watch(framework, () => {
    if (page.value?.framework && page.value?.framework !== framework.value) {
      if (route.path.endsWith(`/${page.value?.framework}`)) {
        navigateTo(`${route.path.split('/').slice(0, -1).join('/')}/${framework.value}`)
      } else {
        navigateTo(`/getting-started`)
      }
    }
  })
}

// Update the framework/module if the page has different ones
watch(page, () => {
  if (page.value?.framework && page.value?.framework !== framework.value) {
    framework.value = page.value?.framework as string
  }
}, { immediate: true })

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path, {
    fields: ['description']
  })
}, {
  watch: [framework]
})

const headline = findPageHeadline(navigation?.value, page?.value)
const breadcrumb = findPageBreadcrumb(navigation?.value, page?.value)
</script>

<template>
  <MPage v-if="page">
    <template #left>
      <MAside class="p-4">
        <div>
          <MButton
            v-for="_framework in frameworks"
            :key="_framework.value"
            class="mb-2"
            :color="framework === _framework.value ? 'primary' : 'neutral'"
            @click="_framework.onSelect"
          >
            {{ _framework.label }}
          </MButton>
        </div>
        <MContentNavigationTree v-if="navigation" :links="navigation" />
      </MAside>
    </template>
    <template #right>
      <MAside class="p-4">
        <MContentToc :links="page?.body?.toc?.links!" />
      </MAside>
    </template>
    <MPageHeader :title="page.title" :description="page.description">
      <template #headline>
        <div class="flex items-center gap-4">
          <div v-for="(item, index) in breadcrumb" :key="index" class="text-sm text-gray-500 dark:text-gray-400">
            {{ item.title }}
          </div>
        </div>
      </template>
    </MPageHeader>
    <MPageBody>
      <ContentRenderer v-if="page.body" :value="page" />
    </MPageBody>
    <MContentSurround :surround />
  </MPage>
</template>
