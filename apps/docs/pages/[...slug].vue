<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <div>
    <NuxtLayout>
      <ContentRenderer
        :key="page._id"
        :value="page"
      />
    </NuxtLayout>
  </div>
</template>
