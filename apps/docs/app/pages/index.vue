<script setup lang="ts">
</script>

<template>
  <div class="relative space-y-4 h-screen flex flex-col items-center justify-center">
    <LazyStarsBg />
    <div class="flex flex-col justify-center items-center gap-2">
      <div class="flex items-center gap-2">
        <Icon name="custom:mockline" size="32" />
        <h1 class="text-4xl font-bold text-center">
          Mockline
        </h1>
      </div>
      <p class="text-center text-lg text-neutral-600">
        Give your app the design it deserves.
      </p>
    </div>
    <div class="space-x-4">
      <NuxtLink to="/getting-started/intro">
        <MButton label="Intro" />
      </NuxtLink>
      <NuxtLink to="/getting-started/installation">
        <MButton label="Installation" />
      </NuxtLink>
    </div>
  </div>
</template>
