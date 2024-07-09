<script setup lang="ts">
</script>
<template>
  <div>
    <Header :height="16" sticky>
      <template #left>
        <NuxtLink to="/">
          <MIcon name="custom:mockline" class="fill-gray-12 size-6" />
        </NuxtLink>
      </template>
      <template #right>
        <MThemeToggle />
      </template>
    </Header>
    <Main>
      <slot />
    </Main>
  </div>
</template>
