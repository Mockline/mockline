<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export type ThemeToggleProps = {
  /** Theme toggle class to override */
  class?: string;
  /** Theme toggle size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  lightIcon?: string;
  darkIcon?: string;
}

const props = withDefaults(defineProps<ThemeToggleProps>(), {
  size: 'xs',
  lightIcon: 'heroicons:moon-solid',
  darkIcon: 'heroicons:sun-solid',
})

const themeToggle = tv({
  base: 'cursor-pointer text-neutral-950 dark:text-white',
  variants: {
    size: {
      xs: 'size-4',
      sm: 'size-6',
      md: 'size-8',
      lg: 'size-10',
      xl: 'size-12',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
})

const themeToggleClasses = computed(() => twMerge(
  themeToggle(props),
  props.class,
))
</script>

<template>
  <ClientOnly>
    <MIcon
      v-if="!$slots.default"
      :name="$colorMode.value === 'light' ? props.lightIcon : props.darkIcon"
      :class="twMerge(themeToggleClasses)"
      class="select-none"
      @click="$colorMode.value === 'light' ? ($colorMode.preference = 'dark') : ($colorMode.preference = 'light')"
    />
    <template #fallback>
      <MIcon :class="twMerge(themeToggleClasses)" :name="$colorMode.value === 'light' ? props.lightIcon : props.darkIcon" />
    </template>
  </ClientOnly>
</template>
