import { tv, type VariantProps } from 'tailwind-variants'

export const switchTv = tv({
  slots: {
    base: 'cursor-pointer w-[32px] h-[20px] shadow-sm flex data-[state=unchecked]:bg-stone-300 data-[state=checked]:bg-stone-800 dark:data-[state=unchecked]:bg-stone-800 dark:data-[state=checked]:bg-stone-700 border border-stone-300 data-[state=checked]:border-stone-700  dark:border-stone-700 rounded-full relative transition-[background] focus-within:outline-none focus-within:shadow-[0_0_0_1px] focus-within:border-stone-800 focus-within:shadow-stone-800',
    label: 'text-neutral-900 dark:text-neutral-100',
    loadingIcon: 'shrink-0 text-neutral-500',
    indicator: 'my-auto bg-white text-xs flex items-center justify-center shadow-xl rounded-full transition-transform will-change-transform data-[state=checked]:translate-x-full',
    icon: 'text-neutral-500',
    root: 'flex items-center gap-2',
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
    disabled: {
      true: ''
    },
    size: {
      xs: {
        base: 'w-[24px] h-[16px] text-xs',
        indicator: 'w-2 h-2 translate-x-1',
        icon: 'w-3 h-3',
        label: 'text-xs',
        root: 'gap-1',
      },
      sm: {
        base: 'w-[28px] h-[18px] text-xs',
        indicator: 'w-2.5 h-2.5 translate-x-1',
        icon: 'w-4 h-4',
        label: 'text-sm',
        root: 'gap-1.5',
      },
      md: {
        base: 'w-[32px] h-[20px] text-sm',
        indicator: 'w-3.5 h-3.5 translate-x-0.5',
        icon: 'w-5 h-5',
        label: 'text-md',
      },
      lg: {
        base: 'w-[36px] h-[24px] text-sm',
        indicator: 'w-4 h-4 translate-x-1',
        icon: 'w-6 h-6',
        label: 'text-lg',
      },
      xl: {
        base: 'w-[40px] h-[28px] text-sm',
        indicator: 'w-4.5 h-4.5 translate-x-1',
        icon: 'w-7 h-7',
        label: 'text-xl',
      },
    },
  },
  compoundVariants: [
    {
      loading: true,
      class: {
        loadingIcon: 'animate-spin',
        base: 'cursor-not-allowed',
      },
    },
    {
      disabled: true,
      class: {
        base: 'cursor-not-allowed opacity-50',
      },
    },
  ],
  defaultVariants: {
    //color: 'primary',
    //variant: 'solid',
    //rounded: 'md',
    size: 'md',
  },
})

type SwitchVariants = VariantProps<typeof switchTv>

export type SwitchProps = {
  label?: string
  color?: SwitchVariants['color']
  variant?: SwitchVariants['variant']
  size?: SwitchVariants['size']
  square?: boolean
  block?: boolean
  class?: string
  iconClass?: string
  indicatorClass?: string
  labelClass?: string
  uncheckedIcon?: string
  checkedIcon?: string
  disabled?: boolean
}
export type SwitchSlots = {
  label(props?: NonNullable<unknown>): any
}
