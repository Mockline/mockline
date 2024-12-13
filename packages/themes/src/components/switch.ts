import { tv, type VariantProps } from 'tailwind-variants'

export const switchTv = tv({
  slots: {
    base: 'cursor-pointer w-[32px] h-[20px] shadow-sm flex',
    label: 'text-neutral-900 dark:text-neutral-100',
    loadingIcon: 'shrink-0',
    indicator: 'my-auto bg-white text-xs flex items-center justify-center shadow-xl rounded-full transition-transform will-change-transform data-[state=checked]:translate-x-full',
    icon: '',
    root: 'flex items-center gap-2 cursor-pointer',
  },
  variants: {
    color: {
      neutral: '',
      primary: '',
    },
    variant: {
      solid: '',
      outline: '',
      soft: '',
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
    required: {
      true: {
        label: 'after:content-[\'*\'] after:ms-0.5 after:text-[var(--ui-danger)]',
      },
    },
    disabled: {
      true: ''
    },
    size: {
      xs: {
        base: 'w-[24px] h-[16px]',
        indicator: 'w-2 h-2 translate-x-1',
        icon: 'w-3 h-3',
        label: 'text-xs',
        root: 'gap-1',
      },
      sm: {
        base: 'w-[28px] h-[18px]',
        indicator: 'w-2.5 h-2.5 translate-x-1',
        icon: 'w-4 h-4',
        label: 'text-sm',
        root: 'gap-1.5',
      },
      md: {
        base: 'w-[32px] h-[20px]',
        indicator: 'w-3.5 h-3.5 translate-x-0.5',
        icon: 'w-5 h-5',
        label: 'text-md',
      },
      lg: {
        base: 'w-[36px] h-[24px]',
        indicator: 'w-4 h-4 translate-x-1',
        icon: 'w-6 h-6',
        label: 'text-lg',
      },
      xl: {
        base: 'w-[40px] h-[28px]',
        indicator: 'w-4.5 h-4.5 translate-x-1',
        icon: 'w-7 h-7',
        label: 'text-xl',
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class: {
        base: 'data-[state=unchecked]:bg-[var(--ui-bg-accented)] data-[state=checked]:bg-[var(--ui-primary)] dark:data-[state=unchecked]:bg-[var(--ui-bg-muted)] dark:data-[state=checked]:bg-[var(--ui-primary)] border border-[var(--ui-bg-accented)] data-[state=checked]:border-[var(--ui-primary)]  dark:border-[var(--ui-bg-muted)] rounded-full relative transition-[background] focus-within:outline-none focus-within:shadow-[0_0_0_1px] focus-within:border-[var(--ui-primary)] focus-within:shadow-[var(--ui-primary)]',
        indicator: 'data-[state=unchecked]:text-[var(--ui-bg-accented)] data-[state=checked]:text-[var(--ui-primary)] dark:data-[state=unchecked]:text-[var(--ui-bg-muted)] dark:data-[state=checked]:text-[var(--ui-primary)]',
      }
    },
    {
      loading: true,
      class: {
        loadingIcon: 'animate-spin',
        base: 'cursor-not-allowed',
        root: 'cursor-not-allowed',
      },
    },
    {
      disabled: true,
      class: {
        base: 'cursor-not-allowed opacity-50',
        root: 'cursor-not-allowed',
        label: 'opacity-50',
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
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
  required?: boolean
}
export type SwitchSlots = {
  label(props?: NonNullable<unknown>): any
}
