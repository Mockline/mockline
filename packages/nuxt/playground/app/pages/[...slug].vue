<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

const { prev, next } = await findPageSurround()

const page = await findCurrentPage()

const nav = await findNavigation()

const headline = findPageHeadline(page?.value)
</script>

<template>
  <MPage v-if="page">
    <template #left>
      <MAside class="p-4">
        <MContentNavigationTree :links="nav" />
      </MAside>
    </template>
    <template #right>
      <MAside class="p-4">
        <MContentToc :links="page?.body?.toc?.links" />
      </MAside>
    </template>
    <MPageHeader :title="page.title" :description="page.description" :links="page.links" :headline />
    <MPageBody prose>
      <ContentRenderer v-if="page.body" :value="page" />
    </MPageBody>
    <MContentSurround :next :prev />
  </MPage>
</template>
