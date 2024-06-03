<template>
  <Html class="bg-canvas text-gray-12 min-h-screen">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <MToasts
      position="top-center"
      close-button
      :toast-options="{
        style: {
          borderColor: 'var(--canvas-5)',
          backgroundColor: 'var(--canvas-2)'
        }
      }"
    />
  </Html>
</template>
