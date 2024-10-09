<script setup lang="ts">
defineShortcuts({
  meta_k: () => toast.info('Hello There!')
})
</script>

<template>
  <MApp class="size-full bg-white text-black dark:bg-black dark:text-white">
    <h1 class="flex items-center justify-center gap-2 text-center text-2xl">
      <span class="font-newsreader italic">Mockline</span> Utils Playground
      <MIcon name="lucide:rocket" class="size-6" />
      <MIcon name="custom:mockline" class="size-8" />
      <MThemeToggle />
    </h1>
    <button @click="() => toast.info('Hello There!')">
      Render a toast
    </button>
    <Test />
    <MToasts />
  </MApp>
</template>
