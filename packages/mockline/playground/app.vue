<script setup lang="ts">
</script>

<template>
  <div class="bg-canvas text-gray-12 min-h-screen">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <MToasts
      :toast-options="{
        style: {
          borderColor: 'var(--canvas-5)',
          backgroundColor: 'var(--canvas-2)'
        }
      }"
    />
  </div>
</template>
