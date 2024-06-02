<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div>
    <div v-if="page">
      <PageBody class="p-4" prose>
        <ContentRenderer v-if="page.body" :value="page" />
      </PageBody>
    </div>
  </div>
</template>
