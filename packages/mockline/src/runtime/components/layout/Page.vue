<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

export type PageProps = {
  /** Wrapper class */
  wrapper?: string
  /** Page class */
  class?: string
  /** Left class */
  left?: string
  /** Right class */
  right?: string
}

const props = withDefaults(defineProps<PageProps>(), {})

const pageClasses = computed(() => twMerge(
  'flex flex-col gap-4 w-full',
  props.class,
))

const wrapperClasses = computed(() => twMerge(
  'flex sm:flex-row flex-col',
  props.wrapper,
))

const leftClasses = computed(() => twMerge(
  'flex flex-col p-4',
  props.left,
))

const rightClasses = computed(() => twMerge(
  'flex flex-col p-4',
  props.right,
))
</script>

<template>
  <div :class="wrapperClasses">
    <div v-if="$slots.left" :class="leftClasses">
      <slot name="left" />
    </div>

    <div :class="pageClasses">
      <slot />
    </div>

    <div v-if="$slots.right" :class="rightClasses">
      <slot name="right" />
    </div>
  </div>
</template>
