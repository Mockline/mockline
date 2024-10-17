<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

type AsideProps = {
  sticky?: boolean
  class?: string
}

const props = withDefaults(defineProps<AsideProps>(), {
  sticky: true
})

const asideClasses = computed(() => twMerge(
  'overflow-y-auto',
  props.sticky && 'sticky top-[var(--header-height)]',
  props.class
))
</script>

<template>
  <aside :class="asideClasses">
    <div class="relative">
      <slot />

      <slot name="bottom" />
    </div>
  </aside>
</template>
