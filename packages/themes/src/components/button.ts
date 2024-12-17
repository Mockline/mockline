import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  slots: {
    base: [
      'relative inline-flex items-center justify-center',
      'font-medium cursor-pointer select-none',
      'focus-visible:outline-none',
      'touch-none tap-highlight-none',
    ],
    label: 'truncate relative',
    leadingIcon: 'shrink-0 relative',
    trailingIcon: 'shrink-0 relative',
  },
  variants: {
    color: {
      neutral: '',
      primary: '',
      danger: '',
    },
    variant: {
      solid: '',
      soft: '',
      subtle: '',
      ghost: '',
      link: '',
    },
    rounded: {
      none: '',
      base: { base: 'rounded-[var(--radius-base)]' },
      sm: { base: 'rounded-[calc(var(--radius-base)*0.75)]' },
      md: { base: 'rounded-[calc(var(--radius-base)*1.25)]' },
      lg: { base: 'rounded-[calc(var(--radius-base)*1.5)]' },
      xl: { base: 'rounded-[calc(var(--radius-base)*2)]' },
      full: { base: 'rounded-full' },
    },
    size: {
      xs: {
        base: 'px-2 py-1 text-xs gap-1',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4',
      },
      sm: {
        base: 'px-2.5 py-1.5 text-xs gap-1.5',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4',
      },
      md: {
        base: 'px-2.5 py-1 text-sm gap-1.5',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4',
      },
      lg: {
        base: 'px-3 py-2 text-sm gap-2',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5',
      },
      xl: {
        base: 'px-3 py-2 text-base gap-2',
        leadingIcon: 'size-6',
        trailingIcon: 'size-6',
      },
    },
    block: {
      true: {
        base: 'w-full',
        trailingIcon: 'ms-auto',
      },
    },
    square: {
      true: '',
    },
    leading: {
      true: '',
    },
    trailing: {
      true: '',
    },
    loading: {
      true: '',
    },
    disabled: {
      true: {
        base: 'cursor-not-allowed opacity-75',
      },
    },
    transitions: {
      true: '',
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class: {
        base: [
          'text-white bg-[var(--color-accent)]',
          'hover:bg-[var(--color-accent-hover)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2',
          'disabled:bg-[var(--color-accent)]/75',
          'shadow-sm',
        ],
      }
    },
    {
      color: 'primary',
      variant: 'soft',
      class: {
        base: [
          'text-[var(--color-accent)] bg-[var(--color-accent)]/10',
          'hover:bg-[var(--color-accent)]/15',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50',
          'disabled:bg-[var(--color-accent)]/5',
        ],
      }
    },
    {
      color: 'primary',
      variant: 'subtle',
      class: {
        base: [
          'text-[var(--color-accent)] bg-accent/10',
          'ring-1 ring-[var(--color-accent)]/25',
          'hover:bg-[var(--color-accent)]/10',
          'active:bg-[var(--color-accent)]/15',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
          'disabled:ring-[var(--color-accent)]/15',
        ],
      }
    },
    {
      color: 'primary',
      variant: 'ghost',
      class: {
        base: [
          'text-[var(--color-accent)]',
          'hover:bg-[var(--color-accent)]/10',
          'active:bg-[var(--color-accent)]/15',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 focus-visible:ring-inset',
          'disabled:hover:bg-transparent',
        ],
      }
    },
    {
      color: 'primary',
      variant: 'link',
      class: {
        base: [
          'text-[var(--color-accent)]',
          'hover:underline hover:underline-offset-4',
          'active:text-[var(--color-accent-hover)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 focus-visible:ring-inset',
          'disabled:no-underline',
        ],
      }
    },
    {
      color: 'danger',
      variant: 'solid',
      class: {
        base: [
          'text-white bg-[var(--color-danger)]',
          'shadow-sm',
          'hover:bg-[var(--color-danger-hover)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-danger)] focus-visible:ring-offset-2',
          'disabled:bg-[var(--color-danger)]/75',
        ],
      }
    },
    {
      color: 'danger',
      variant: 'soft',
      class: {
        base: [
          'text-[var(--color-danger)] bg-[var(--color-danger)]/10',
          'hover:bg-[var(--color-danger)]/15',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-danger)]/50',
          'disabled:bg-[var(--color-danger)]/5',
        ],
      }
    },
    {
      color: 'danger',
      variant: 'subtle',
      class: {
        base: [
          'text-[var(--color-danger)] bg-danger/10',
          'ring-1 ring-[var(--color-danger)]/25',
          'hover:bg-[var(--color-danger)]/10',
          'active:bg-[var(--color-danger)]/15',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-danger)]',
          'disabled:ring-[var(--color-danger)]/15',
        ],
      }
    },
    {
      color: 'danger',
      variant: 'ghost',
      class: {
        base: [
          'text-[var(--color-danger)]',
          'hover:bg-[var(--color-danger)]/10',
          'active:bg-[var(--color-danger)]/15',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-danger)]/50 focus-visible:ring-inset',
          'disabled:hover:bg-transparent',
        ],
      }
    },
    {
      color: 'danger',
      variant: 'link',
      class: {
        base: [
          'text-[var(--color-danger)]',
          'hover:underline hover:underline-offset-4',
          'active:text-[var(--color-danger-hover)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-danger)]/50 focus-visible:ring-inset',
          'disabled:no-underline',
        ],
      }
    },
    {
      color: 'neutral',
      variant: 'solid',
      class: {
        base: [
          'text-[var(--color-text-inverted)] bg-[var(--color-fg-primary)]',
          'hover:bg-[var(--color-fg-primary)]/90',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-fg-primary)] focus-visible:ring-offset-2',
          'disabled:bg-[var(--color-bg-translucent)]',
        ],
      }
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: {
        base: [
          'text-[var(--color-fg-primary)] bg-[var(--color-bg-translucent)]',
          'hover:bg-[var(--color-bg-quaternary)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-fg-primary)]/50',
          'disabled:bg-[var(--color-bg-translucent)]/75',
        ],
      }
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class: {
        base: [
          'text-[var(--color-fg-primary)] bg-[var(--color-bg-translucent)]',
          'ring-1 ring-[var(--color-fg-primary)]/15',
          'hover:bg-[var(--color-bg-quaternary)]',
          'active:bg-[var(--color-bg-quaternary)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-fg-primary)]',
          'disabled:ring-[var(--color-fg-primary)]/15',
        ],
      }
    },
    {
      color: 'neutral',
      variant: 'ghost',
      class: {
        base: [
          'text-[var(--color-fg-primary)]',
          'hover:bg-[var(--color-bg-quaternary)]',
          'active:bg-[var(--color-bg-quaternary)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-fg-primary)]/50 focus-visible:ring-inset',
          'disabled:hover:bg-transparent',
        ],
      }
    },
    {
      color: 'neutral',
      variant: 'link',
      class: {
        base: [
          'text-[var(--color-fg-primary)]',
          'hover:underline hover:underline-offset-4',
          'active:text-[var(--color-fg-primary)]',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-fg-primary)]/50 focus-visible:ring-inset',
          'disabled:no-underline',
        ],
      }
    },
    {
      size: 'xs',
      square: true,
      class: 'p-1',
    },
    {
      size: 'sm',
      square: true,
      class: 'p-1.5',
    },
    {
      size: 'md',
      square: true,
      class: 'p-1.5',
    },
    {
      size: 'lg',
      square: true,
      class: 'p-2',
    },
    {
      size: 'xl',
      square: true,
      class: 'p-2',
    },
    {
      loading: true,
      leading: true,
      class: {
        leadingIcon: 'animate-spin',
      },
    },
    {
      loading: true,
      leading: false,
      trailing: true,
      class: {
        trailingIcon: 'animate-spin',
      },
    },
    {
      transitions: true,
      disabled: false,
      class: {
        base: 'transition-colors duration-200 ease-in-out active:translate-y-px',
      }
    }
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    rounded: 'base',
    size: 'md',
  },
})

type ButtonVariants = VariantProps<typeof button>

export type ButtonProps = {
  /**
   * Label of the button
   */
  label?: string
  /**
   * Color of the button
   * @default primary
   * @values primary, danger, neutral
   */
  color?: ButtonVariants['color']
  /**
   * Variant of the button
   * @default solid
   * @values solid, soft, subtle, ghost, link
   */
  variant?: ButtonVariants['variant']
  /**
   * Size of the button
   * @default md
   * @values xs, sm, md, lg, xl
   */
  size?: ButtonVariants['size']
  /**
   * Rounded corners of the button
   * @default base
   * @values base, none, sm, md, lg, xl, full
   */
  rounded?: ButtonVariants['rounded']
  /**
   * Apply square shape to the button (same padding on all sides)
   */
  square?: boolean
  /**
   * Button will take the full width of the parent container
   * @default false
   */
  block?: boolean
  /**
   * Class to override default styles
   */
  class?: string
  /**
   * Class applied to the icon
   */
  iconClass?: string
  /**
   * Class applied to the label
   */
  labelClass?: string
  /**
   * Show a loading spinner
   */
  loading?: boolean
  /**
   * Disable the button
   */
  disabled?: boolean
}

export type ButtonSlots = {
  leading(props?: NonNullable<unknown>): any
  default(props?: NonNullable<unknown>): any
  trailing(props?: NonNullable<unknown>): any
}
