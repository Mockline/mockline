<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'
import buttonStyle from '#build/components/button'

type ButtonVariants = VariantProps<typeof button>

export type ButtonProps = {
  /** Button label */
  label: string;
  /** Button class to override */
  class?: string;
  /** Block button */
  block?: boolean;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Button color */
  color?: ButtonVariants['color'];
  /** Button variant */
  variant?: ButtonVariants['variant'];
  /** Size */
  size?: ButtonVariants['size'];
  /** Rounded */
  rounded?: ButtonVariants['rounded'];
  /** Padding */
  padding?: ButtonVariants['padding'];
  /** Form */
  form?: string;
  /** Loading */
  loading?: boolean;
  /** icon position */
  iconPosition?: 'left' | 'right';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  iconPosition: 'left',
})

const button = tv(buttonStyle)

const buttonClass = computed(() => {
  return twMerge(button(props), props.class)
})
</script>

<template>
  <component :is="'button'" :class="buttonClass" :type :form>
    <slot name="left">
      <MIcon name="i-lucide-loader" size="md" v-if="iconPosition === 'left' && loading" class="animate-spin" />
    </slot>
    {{ props.label }}
    <slot name="right">
      <MIcon name="i-lucide-loader" size="md" v-if="iconPosition === 'right' && loading" class="animate-spin" />
    </slot>
  </component>
</template>
