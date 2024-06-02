<script setup lang="ts">
import { NavigationMenuLink } from 'radix-vue'

const items = [
  {
    title: 'Home',
    path: '/',
    slot: 'home'
  },
  {
    title: 'Docs',
    path: '/getting-started',
  },
]
</script>

<template>
  <MNavMenu :items class="absolute top-4 z-50" color="white">
    <template #home>
      <ul class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
        <li class="row-span-3 grid">
          <NavigationMenuLink as-child>
            <a
              class="focus:shadow-primary-7 from-primary-9 to-primary-11 flex size-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/"
            >
              <span class="i-custom-mockline text-gray-12 size-8" />
              <div class="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">Mockline</div>
              <p class="text-mauve-4 text-[14px] leading-[1.3]">
                Next generation UI framework for building modern web applications.
              </p>
            </a>
          </NavigationMenuLink>
        </li>
        <li class="grid gap-y-[10px]">
          <NavigationMenuLink as-child>
            <a
              class="flex items-center gap-3 text-[18px] font-medium leading-[1.2] text-white"
              href="/"
            >
              <span>Home</span>
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink as-child>
            <a
              class="flex items-center gap-3 text-[18px] font-medium leading-[1.2] text-white"
              href="/"
            >
              <span>Docs</span>
            </a>
          </NavigationMenuLink>
        </li>
      </ul>
    </template>
    <template #leading>
      <NuxtLink to="/" class="i-custom-mockline text-gray-12 size-8" />
    </template>
    <template #trailing>
      <div class="flex items-center gap-3">
        <MThemeToggle />
        <MButton size="sm" label="Waitlist" class="ring-gray-1 ring-2" />
      </div>
    </template>
  </MNavMenu>
</template>

