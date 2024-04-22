<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { colors } from '#mockline/colors'

const buttonStyle = tv({
  base: 'text-white',
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
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-1 text-base',
      lg: 'px-4 py-2 text-lg'
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    },
    block: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md'
  },
  compoundVariants: [
    ...colors.map(color => ({
      variant: 'solid',
      color: `${color}`,
      class: `bg-${color}-9 hover:bg-${color}-10`
    })),
    ...colors.map(color => ({
      variant: 'outline',
      color: `${color}`,
      class: `border border-${color}-9 text-${color}-9 hover:bg-${color}-9 hover:text-${color}-1`
    })),
    ...colors.map(color => ({
      variant: 'soft',
      color: `${color}`,
      class: `bg-${color}-2 text-${color}-9 hover:bg-${color}-3`
    })),
    ...colors.map(color => ({
      variant: 'subtle',
      color: `${color}`,
      class: `bg-${color}-3 text-${color}-9 hover:bg-${color}-4`
    })),
    ...colors.map(color => ({
      variant: 'ghost',
      color: `${color}`,
      class: `text-${color}-9 hover:bg-${color}-3`
    })),
    ...colors.map(color => ({
      variant: 'link',
      color: `${color}`,
      class: `text-${color}-9 hover:underline`
    }))
  ]
})

export type ButtonProps = {
  /** Button label */
  label: string;
  /** Button class */
  class?: string;
  /** Button color */
  color?: VariantProps<typeof buttonStyle>['color'];
  /** Button variant */
  variant?: VariantProps<typeof buttonStyle>['variant'];
  /** Block button */
  block?: boolean;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Size */
  size?: VariantProps<typeof buttonStyle>['size'];
  /** Rounded */
  rounded?: VariantProps<typeof buttonStyle>['rounded'];
  /** Form */
  form?: string;
}

const props = defineProps<ButtonProps>()

const buttonClass = computed(() => {
  return twMerge(buttonStyle({
    ...props,
  }), props.class)
})
</script>

<template>
  <component :is="'button'" :class="buttonClass" :type :form>
    {{ props.label }}
  </component>
</template>

<style scoped>

</style>
