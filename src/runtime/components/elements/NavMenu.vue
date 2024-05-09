<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'

export type NavMenuProps = {
  orientation?: 'horizontal' | 'vertical'
  items: {
    title: string
    path: string
    slot?: string
  }[]
}

const props = withDefaults(defineProps<NavMenuProps>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <NavigationMenuRoot class="relative z-[1] flex w-full justify-center" :orientation>
    <NavigationMenuList class="bg-canvas-2 m-0 flex list-none items-center justify-center rounded-[6px] p-1">
      <slot name="leading" />
      <NavigationMenuItem v-for="item in items" :key="item.title">
        <NavigationMenuTrigger
          v-if="item.slot"
          class="text-primary-11 hover:bg-primary-3 focus:shadow-primary-7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
        >
          {{ item.title }}
        </NavigationMenuTrigger>
        <NavigationMenuContent
          v-if="item.slot"
          class="data-[motion=from-start]:animate-enterFromLeft text-gray-12 data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute left-0 top-0 w-full sm:w-auto"
        >
          <slot :name="item.title.toLowerCase()" />
        </NavigationMenuContent>
        <NavigationMenuLink v-if="!item.slot" :href="item.path" class="text-primary-11 hover:bg-primary-3 focus:shadow-primary-7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          {{ item.title }}
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator />
      <slot name="trailing" />
    </NavigationMenuList>

    <div class="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
      <NavigationMenuViewport
        class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut bg-canvas-2 relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"
      />
    </div>
  </NavigationMenuRoot>
</template>
