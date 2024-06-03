<template>
  <div>
    <Header :height="16">
      <template #left>
        <NuxtLink to="/" class="i-custom-mockline size-6" />
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
