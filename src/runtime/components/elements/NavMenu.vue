<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'

const navMenuStyle = tv({
  variants: {
    color: {
      primary: 'text-primary-11 hover:bg-primary-3 focus:shadow-primary-7',
      white: 'hover:bg-gray-3 focus:shadow-gray-7 text-gray-12',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

export type NavMenuProps = {
  orientation?: 'horizontal' | 'vertical'
  color?: VariantProps<typeof navMenuStyle>['color'];
  items: {
    title: string
    path: string
    slot?: string
  }[]
}

const props = withDefaults(defineProps<NavMenuProps>(), {
  orientation: 'horizontal',
  color: 'primary',
})

const navTitleStyle = computed(() => {
  return twMerge([
    navMenuStyle({...props}),
    'group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]',
  ])
})
</script>

<template>
  <NavigationMenuRoot class="relative z-[1] flex w-full justify-center" :orientation>
    <NavigationMenuList class="bg-canvas-2 border-canvas-3 m-0 flex list-none items-center justify-between gap-8 rounded-lg border px-4 py-1.5 shadow-lg">
      <slot name="leading" />
      <div class="flex list-none items-center justify-between">
        <NavigationMenuItem v-for="item in items" :key="item.title">
          <NavigationMenuTrigger
            v-if="item.slot"
            :class="navTitleStyle"
          >
            {{ item.title }}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            v-if="item.slot"
            class="data-[motion=from-start]:animate-enterFromLeft text-gray-12 data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute left-0 top-0 w-full sm:w-auto"
          >
            <slot :name="item.title.toLowerCase()" />
          </NavigationMenuContent>
          <NavigationMenuLink v-if="!item.slot" :href="item.path" :class="navTitleStyle">
            {{ item.title }}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </div>

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
