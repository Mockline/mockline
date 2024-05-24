<script setup lang="ts">
import { NavigationMenuLink } from 'radix-vue'

definePageMeta({
  layout: 'component',
})

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
    <MNavMenu :items="nav" color="white">
      <template #leading>
        <img src="/assets/logo/icon.svg" alt="logo mockline" class="size-8">
      </template>

      <template #trailing>
        <MButton size="sm" rounded="md" label="Sign in" class="ring-gray-1 ring-2" />
      </template>
      <template #home>
        <ul class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
          <li class="row-span-3 grid">
            <NavigationMenuLink as-child>
              <a
                class="focus:shadow-primary-7 from-primary-9 to-primary-11 flex size-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="/"
              >
                <img src="/assets/logo/icon.svg" alt="logo mockline" class="size-[32px]">
                <div class="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">Radix Primitives</div>
                <p class="text-mauve-4 text-[14px] leading-[1.3]">Unstyled, accessible components for Vue.</p>
              </a>
            </NavigationMenuLink>
          </li>
          CSS-in-JS with best-in-class developer experience.-
        </ul>
      </template>
      <template #docs>
        <div class="flex flex-col gap-y-[10px] p-[22px] sm:w-[500px]">
          <a class="text-[18px] font-medium leading-[1.2]" href="/docs/elements">Elements</a>
          <a class="text-[18px] font-medium leading-[1.2]" href="/docs/composites">Layouts</a>
          <a class="text-[18px] font-medium leading-[1.2]" href="/docs/primitives">Primitives</a>
        </div>
      </template>
    </MNavMenu>
  </div>
</template>

<style scoped>

</style>
