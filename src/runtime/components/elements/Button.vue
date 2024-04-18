<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

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
      primary: 'bg-blue-500 hover:bg-blue-600',
      secondary: 'bg-gray-500 hover:bg-gray-600',
      success: 'bg-green-500 hover:bg-green-600',
      danger: 'bg-red-500 hover:bg-red-600',
      warning: 'bg-yellow-500 hover:bg-yellow-600',
      info: 'bg-blue-500 hover:bg-blue-600',
      light: 'bg-gray-200 hover:bg-gray-300',
      dark: 'bg-gray-800 hover:bg-gray-900',
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
    {
      variant: 'solid',
      class: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      variant: 'outline',
      class: 'border border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white'
    },
    {
      variant: 'soft',
      class: 'bg-blue-100 text-blue-500 hover:bg-blue-200'
    },
    {
      variant: 'subtle',
      class: 'bg-blue-50 text-blue-500 hover:bg-blue-100'
    },
    {
      variant: 'ghost',
      class: 'bg-transparent text-blue-500 hover:bg-blue-50'
    },
    {
      variant: 'link',
      class: 'bg-transparent text-blue-500 hover:bg-transparent hover:underline'
    }
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
