<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { colors } from '#mockline/colors'

const buttonStyle = tv({
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
      '2xs': 'text-xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    gap: {
      '2xs': 'gap-x-1',
      xs: 'gap-x-1.5',
      sm: 'gap-x-1.5',
      md: 'gap-x-2',
      lg: 'gap-x-2.5',
      xl: 'gap-x-2.5',
    },
    padding: {
      '2xs': 'px-1 py-0.5',
      xs: 'px-2 py-1',
      sm: 'px-2 py-1',
      md: 'px-3 py-1.5',
      lg: 'px-4 py-2',
      xl: 'px-5 py-2.5',
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
    size: 'sm',
    rounded: 'md',
    padding: 'xs',
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
  color?: VariantProps<typeof buttonStyle>['color'];
  /** Button variant */
  variant?: VariantProps<typeof buttonStyle>['variant'];
  /** Size */
  size?: VariantProps<typeof buttonStyle>['size'];
  /** Rounded */
  rounded?: VariantProps<typeof buttonStyle>['rounded'];
  /** Padding */
  padding?: VariantProps<typeof buttonStyle>['padding'];
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

const buttonClass = computed(() => {
  return twMerge(buttonStyle({
    ...props,
  }), props.class)
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

<style scoped>

</style>
