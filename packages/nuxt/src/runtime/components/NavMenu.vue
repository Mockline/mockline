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
} from 'reka-ui'
import type { NavMenuProps } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = withDefaults(defineProps<NavMenuProps>(), {
  orientation: 'horizontal',
})

const { getClasses } = useComponent('navMenu', props)
</script>

<template>
  TODO
<!--  <NavigationMenuRoot class="relative z-[1] flex w-full justify-center" :orientation>
    <NavigationMenuList class="bg-neutral border-[var(&#45;&#45;ui-border)] m-0 flex list-none items-center justify-between gap-8 rounded-lg border px-4 py-1.5 shadow-lg">
      <slot name="leading" />
      <div class="flex list-none items-center justify-between">
        <NavigationMenuItem v-for="item in items" :key="item.label">
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
  </NavigationMenuRoot>-->
</template>
