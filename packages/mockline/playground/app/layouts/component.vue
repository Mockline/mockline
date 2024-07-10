<script setup lang="ts">
function formatTitle(title: string): string {
  return title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between p-4">
      <NuxtLink to="/" class="text-blue-600 hover:underline">
        Home
      </NuxtLink>
      <MThemeToggle />
    </div>
    <Main class="p-4">
      <div class="flex flex-col gap-2">
        <h3 class="text-gray-12 text-2xl font-bold">
          {{ formatTitle($route.name) }}
        </h3>
      </div>
      <Page>
        <slot />
      </Page>
    </Main>
  </div>
</template>

<style scoped>

</style>
