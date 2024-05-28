<script setup lang="ts">
import Surround from '~/components/Surround.vue'

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
</script>

<template>
  <div>
    <div v-if="page">
      <ContentRenderer v-if="page.body" :value="page" class="prose dark:prose-invert max-w-none p-4" />
    </div>
    <Surround />
  </div>
</template>
