<script setup lang="ts">
</script>
<template>
  <div>
    <Header :height="16" sticky>
      <template #left>
        <NuxtLink to="/" class="i-custom-mockline size-6" />
      </template>
      <template #right>
        <MThemeToggle />
      </template>
    </Header>
    <!--    <ThemeSelector />-->
    <Main>
      <slot />
    </Main>
  </div>
</template>
