<template>
  <div>
    <MHeader :height="16" sticky>
      <template #left>
        <NuxtLink to="/">
          <MIcon name="custom:mockline" />
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
