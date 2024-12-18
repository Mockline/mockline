<script setup lang="ts">
import { NavigationMenuLink } from 'reka-ui'

const nav = [
  {
    title: 'Home',
    path: '/',
    slot: 'home',
  },
  {
    title: 'Docs',
    path: '/docs',
    slot: 'docs',
  },
  {
    title: 'GitHub',
    path: 'https://github.com/mockline/mockline',
  }
]
</script>

<template>
  <div>
    <MNavMenu :items="nav">
      <template #leading>
        <Icon name="custom:mockline" class="size-8" />
      </template>

      <template #trailing>
        <div class="flex items-center gap-3">
          <MThemeToggle />
          <MButton size="sm" rounded="md" label="Sign in" class="ring-[var(--color-border-primary)] ring-2" />
        </div>
      </template>
      <template #home>
        <ul class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
          <li class="row-span-3 grid">
            <NavigationMenuLink as-child>
              <a
                class="from-accent to-accent-hover/50 flex size-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="/"
              >
                <Icon name="custom:mockline" class="size-10 text-white" />
                <div class="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">Radix Primitives</div>
                <p class="text-[14px] leading-[1.3]">Unstyled, accessible components for Vue.</p>
              </a>
            </NavigationMenuLink>
          </li>
          CSS-in-JS with best-in-class developer experience.-
        </ul>
      </template>
      <template #docs>
        <div class="flex flex-col gap-y-[10px] p-[22px] sm:w-[500px]">
          <a class="text-[18px] font-medium leading-[1.2]" href="/playground/button">Button</a>
          <a class="text-[18px] font-medium leading-[1.2]" href="/playground/nav-menu">Nav Menu</a>
          <a class="text-[18px] font-medium leading-[1.2]" href="/playground/page">Page</a>
        </div>
      </template>
    </MNavMenu>
  </div>
</template>

<style scoped>

</style>
