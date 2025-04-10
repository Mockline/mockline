<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryCollection('docs').path(route.path).first())

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

</script>

<template>
  <MPage v-if="page">
    <MPageBody>
      <ContentRenderer v-if="page.body" :value="page" />
    </MPageBody>
  </MPage>
</template>
