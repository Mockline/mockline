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
  slots: {
    content: 'absolute left-0 top-0 w-full data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] sm:w-auto',
    viewport: 'bg-neutral border border-[var(--ui-border)] relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] transition-[width,_height] duration-300 data-[state=closed]:animate-[scale-out_200ms_ease] data-[state=open]:animate-[scale-in_200ms_ease] sm:w-[var(--radix-navigation-menu-viewport-width)]'
  },
  variants: {
    color: {
      primary: 'text-primary-500 hover:bg-[var(--ui-bg-accented)] focus:shadow-[var(--ui-bg-inverted)]',
      white: 'hover:bg-[var(--ui-bg-accented)] focus:shadow-[var(--ui-bg-inverted)] text-neutral-700',
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
})

const navTitleStyle = computed(() => {
  return twMerge([
    'group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]',
    navMenuStyle(),
  ])
})
</script>

<template>
  <NavigationMenuRoot class="relative z-[1] flex w-full justify-center" :orientation>
    <NavigationMenuList class="bg-neutral border-[var(--ui-border)] m-0 flex list-none items-center justify-between gap-8 rounded-lg border px-4 py-1.5 shadow-lg">
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
            :class="navMenuStyle.slots.content"
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
      <NavigationMenuViewport :class="navMenuStyle.slots.viewport" />
    </div>
  </NavigationMenuRoot>
</template>
