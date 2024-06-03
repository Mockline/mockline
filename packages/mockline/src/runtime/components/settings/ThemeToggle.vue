<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

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
  lightIcon: 'i-heroicons-moon-solid',
  darkIcon: 'i-heroicons-sun-solid',
})

const themeToggle = tv({
  base: 'text-gray-12 cursor-pointer',
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
    <span
      :class="twMerge(
        themeToggleClasses,
        $colorMode.value === 'light' ? props.lightIcon : props.darkIcon
      )"
      @click="$colorMode.value === 'light' ? ($colorMode.preference = 'dark') : ($colorMode.preference = 'light')"
    />
    <template #fallback>
      <div>
        <span
          :class="twMerge(
            themeToggleClasses,
            $colorMode.value === 'light' ? props.lightIcon : props.darkIcon
          )"
        />
      </div>
    </template>
  </ClientOnly>
</template>
