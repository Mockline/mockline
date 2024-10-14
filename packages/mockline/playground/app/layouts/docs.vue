<script setup lang="ts">
</script>
<template>
  <div>
    <MHeader :height="16" sticky>
      <template #left>
        <NuxtLink to="/">
          <MIcon name="custom:mockline" class="fill-gray-12 size-6" />
        </NuxtLink>
      </template>
      <template #right>
        <MThemeToggle />
      </template>
    </MHeader>
    <MMain>
      <slot />
    </MMain>
  </div>
</template>
