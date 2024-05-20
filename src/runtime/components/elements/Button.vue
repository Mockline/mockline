<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'
import { colors } from '#mockline/colors'

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

const button = tv({
  base: 'flex items-center justify-center gap-1 text-white',
  variants: {
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: '',
      ghost: '',
      link: '',
    },
    color: {
      ...Object.fromEntries(colors.map(color => [color, ''])),
    },
    size: {
      '2xs': 'gap-x-1 px-1 py-0.5 text-xs',
      xs: 'gap-x-1.5 px-2 py-1 text-xs',
      sm: 'gap-x-1.5 px-2 py-1 text-sm',
      md: 'gap-x-2 px-3 py-1.5 text-base',
      lg: 'gap-x-2.5 px-4 py-2 text-lg',
      xl: 'gap-x-2.5 px-5 py-2.5 text-xl',
    },
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
    block: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    rounded: 'md',
  },
  compoundVariants: [
    ...colors.map(color => ({
      color,
      variant: 'solid',
      class: `bg-${color}-9 hover:bg-${color}-10`
    })),
    ...colors.map(color => ({
      color,
      variant: 'outline',
      class: `border border-${color}-9 text-${color}-9 hover:bg-${color}-9 hover:text-${color}-1`
    })),
    ...colors.map(color => ({
      color,
      variant: 'soft',
      class: `bg-${color}-2 text-${color}-9 hover:bg-${color}-3`
    })),
    ...colors.map(color => ({
      color,
      variant: 'subtle',
      class: `bg-${color}-3 text-${color}-9 hover:bg-${color}-4`
    })),
    ...colors.map(color => ({
      color,
      variant: 'ghost',
      class: `text-${color}-9 hover:bg-${color}-3`
    })),
    ...colors.map(color => ({
      color,
      variant: 'link',
      class: `text-${color}-9 hover:underline`
    }))
  ]
})

const buttonClass = computed(() => {
  return twMerge(button(props), props.class)
})
</script>

<template>
  <component :is="'button'" :class="buttonClass" :type :form>
    <slot name="left">
      <span v-if="iconPosition === 'left' && loading" class="i-lucide-loader animate-spin" />
    </slot>
    {{ props.label }}
    <slot name="right">
      <span v-if="iconPosition === 'right' && loading" class="i-lucide-loader animate-spin" />
    </slot>
  </component>
</template>
