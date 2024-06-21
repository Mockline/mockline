<script setup lang="ts">
definePageMeta({
  layout: 'component',
})
</script>

<template>
  <Page class="bg-canvas-3 h-96" right="p-0 bg-blue" left="p-0 bg-red">
    <template #left>
      <div>
        Left
      </div>
    </template>
    <template #right>
      <div>
        Right
      </div>
    </template>
    <PageBody>
      Page Body
    </PageBody>
  </Page>
</template>

<style scoped>

</style>
