import { tv, type VariantProps } from 'tailwind-variants'

export const switchTv = tv({
  slots: {
    base: 'cursor-pointer w-[32px] h-[20px] shadow-sm flex data-[state=unchecked]:bg-stone-300 data-[state=checked]:bg-stone-800 dark:data-[state=unchecked]:bg-stone-800 dark:data-[state=checked]:bg-stone-700 border border-stone-300 data-[state=checked]:border-stone-700  dark:border-stone-700 rounded-full relative transition-[background] focus-within:outline-none focus-within:shadow-[0_0_0_1px] focus-within:border-stone-800 focus-within:shadow-stone-800',
    label: '',
    loadingIcon: 'shrink-0 text-neutral-500',
    indicator: 'w-3.5 h-3.5 my-auto bg-white text-xs flex items-center justify-center shadow-xl rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-full',
    icon: 'w-5 h-5 text-neutral-500',
  },
  variants: {
    color: {
      neutral: '',
      primary: '',
    },
    variant: {
      solid: '',
    },
    transitions: {
      true: '',
    },
    checked: {
      true: {
        icon: 'group-data-[state=checked]:opacity-100'
      }
    },
    unchecked: {
      true: {
        icon: 'group-data-[state=unchecked]:opacity-100'
      }
    },
    loading: {
      true: ''
    },
  },
  compoundVariants: [
    {
      loading: true,
      class: {
        loadingIcon: 'animate-spin',
      },
    },
  ],
})

type SwitchVariants = VariantProps<typeof switchTv>

export type SwitchProps = {
  label?: string
  color?: SwitchVariants['color']
  variant?: SwitchVariants['variant']
  square?: boolean
  block?: boolean
  class?: string
  iconClass?: string
  indicatorClass?: string
  labelClass?: string
  uncheckedIcon?: string
  checkedIcon?: string
}
export type SwitchSlots = {
  label(props?: NonNullable<unknown>): any
}
