import { tv, type VariantProps } from 'tailwind-variants'

export const switchTv = tv({
  slots: {
    root: 'relative cursor-pointer flex items-start',
    base: 'inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 data-[state=unchecked]:bg-[var(--color-bg-quaternary)]',
    container: 'flex items-center',
    thumb: 'group pointer-events-none rounded-full bg-[var(--color-bg-primary)] shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center',
    icon: 'absolute shrink-0 group-data-[state=unchecked]:text-[var(--color-bg-quaternary)] opacity-0 size-10/12',
    wrapper: 'ms-2',
    label: 'block font-medium text-[var(--color-text-primary)]',
    description: 'text-[var(--color-text-quaternary)]'
  },
  variants: {
    color: {
      primary: {
        base: `data-[state=checked]:bg-accent focus-visible:outline-accent`,
        icon: `group-data-[state=checked]:text-accent`
      },
      neutral: {
        base: 'data-[state=checked]:bg-[var(--color-fg-primary)]',
        icon: 'group-data-[state=checked]:text-[var(--color-text-primary)]'
      }
    },
    size: {
      xs: {
        base: 'w-7',
        container: 'h-4',
        thumb: 'size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3',
        wrapper: 'text-xs'
      },
      sm: {
        base: 'w-8',
        container: 'h-4',
        thumb: 'size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5',
        wrapper: 'text-xs'
      },
      md: {
        base: 'w-9',
        container: 'h-5',
        thumb: 'size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4',
        wrapper: 'text-sm'
      },
      lg: {
        base: 'w-10',
        container: 'h-5',
        thumb: 'size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5',
        wrapper: 'text-sm'
      },
      xl: {
        base: 'w-11',
        container: 'h-6',
        thumb: 'size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5',
        wrapper: 'text-base'
      }
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
      true: {
        icon: 'animate-spin'
      }
    },
    required: {
      true: {
        label: 'after:content-[\'*\'] after:ms-0.5 after:text-[var(--ui-danger)]'
      }
    },
    transitions: {
      true: {
        base: 'transition-colors duration-200',
        icon: 'transition-[color,opacity] duration-200',
      }
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-75',
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md'
  }
})

type SwitchVariants = VariantProps<typeof switchTv>

export type SwitchProps = {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  label?: string
  description?: string
  color?: SwitchVariants['color']
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
  /** When `true`, the loading icon will be displayed. */
  loading?: boolean
  /**
   * The icon when the `loading` prop is `true`.
   * @defaultValue appConfig.ui.icons.loading
   */
  loadingIcon?: string
}

export type SwitchSlots = {
  label(props: { label?: string }): any
  description(props: { description?: string }): any
}

export type SwitchEmits = {
  change: [payload: Event]
}
