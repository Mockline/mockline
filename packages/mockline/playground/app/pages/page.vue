<script setup lang="ts">
definePageMeta({
  layout: 'component',
})
</script>

<template>
  <MPage class="h-96 bg-gray-100 dark:bg-neutral-800" right="p-0 bg-blue-500" left="p-0 bg-red-500">
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
    <MPageBody>
      Page Body
    </MPageBody>
  </MPage>
</template>

<style scoped>

</style>
