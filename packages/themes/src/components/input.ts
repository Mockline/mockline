import { tv, type VariantProps } from 'tailwind-variants'

export const input = tv({
  slots: {
    // Component base class (if no slots needed)
    root: 'relative flex items-start',
    base: [
      'px-1 py-1',
      'font-medium cursor-pointer',
      'focus-visible:outline-none',
      'text-[var(--color-text-primary)]',
    ],
    container: 'flex items-center',
  },
  // Variants definition
  variants: {
    color: {
      primary: 'bg-accent border-accent text-white focus-visible:outline-accent',
      secondary: 'bg-secondary-500 text-white'
    },
    rounded: {
      none: '',
      base: { base: 'rounded-[var(--radius-base)]' },
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    },
    variant: {
      solid: '',
      outline: '',
    },
  },
  // Slots configuration
  /*  slots: {
    root: 'flex w-full',
    label: 'font-medium',
    icon: 'w-4 h-4'
  },*/

  compoundVariants: [
    {
      color: 'primary',
      variant: 'outline',
      class: {
        base: [
          'border-1 border-[var(--color-accent)]/25 focus:border-[var(--color-accent)]/100',
          'bg-background hover:bg-accent/5',
          'focus:ring-3 focus:ring-accent/30 focus:outline-none focus:shadow-lg',
        ],
      }
    },

    {
      transitions: true,
      class: {
        base: 'transition-colors duration-100 ease-in-out active:translate-y-px',
      }
    }
  ],

  // Default values
  defaultVariants: {
    color: 'primary',
    rounded: 'base',
    variant: 'outline',
    size: 'md',
  }
})

type InputVariants = VariantProps<typeof input>

export type InputProps = {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  placeholder?: string
/*
  color?: InputVariants['color']
*/
  variant?: InputVariants['variant']
  // size?: SwitchVariants['size']
  square?: boolean
  block?: boolean
  class?: string
  iconClass?: string
  indicatorClass?: string
  placeholderClass?: string
  // disabled?: boolean
  // required?: boolean
  /** When `true`, the loading icon will be displayed. */
  loading?: boolean
  /**
   * The icon when the `loading` prop is `true`.
   * @defaultValue appConfig.ui.icons.loading
   */
  loadingIcon?: string
}

export type InputSlots = {
  placeholder(props: { placeholder?: string }): any
}

export type InputEmits = {
  change: [payload: Event]
}
