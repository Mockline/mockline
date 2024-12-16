import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  slots: {
    base: 'cursor-pointer font-medium inline-flex items-center justify-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
    label: 'truncate',
    leadingIcon: 'shrink-0',
    leadingAvatar: 'shrink-0',
    trailingIcon: 'shrink-0',
  },
  variants: {
    color: {
      neutral: '',
      primary: '',
      danger: '',
    },
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: '',
      ghost: '',
      link: '',
    },
    rounded: {
      none: '',
      base: {
        base: 'rounded-base',
      },
      sm: {
        base: 'rounded-sm',
      },
      md: {
        base: 'rounded-md',
      },
      lg: {
        base: 'rounded-lg',
      },
      xl: {
        base: 'rounded-xl',
      },
      full: {
        base: 'rounded-full',
      },
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
    transitions: {
      true: '',
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class: 'text-white bg-accent hover:bg-accent-hover disabled:bg-accent aria-disabled:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
    },
    {
      color: 'primary',
      variant: 'outline',
      class: 'ring ring-inset ring-accent/50 text-accent hover:bg-accent/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-accent'
    },
    {
      color: 'primary',
      variant: 'soft',
      class: 'text-accent bg-accent/10 hover:bg-accent/15 focus-visible:bg-accent/15 disabled:bg-accent/10 aria-disabled:bg-accent/10'
    },
    {
      color: 'primary',
      variant: 'subtle',
      class: 'text-accent ring ring-inset ring-accent/25 bg-accent/10 hover:bg-accent/15 disabled:bg-accent/10 aria-disabled:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent'
    },
    {
      color: 'primary',
      variant: 'ghost',
      class: 'text-accent hover:bg-accent/10 focus-visible:bg-accent/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
    },
    {
      color: 'primary',
      variant: 'link',
      class: 'text-accent hover:underline hover:text-accent/75 disabled:text-accent aria-disabled:text-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent'
    },
    {
      color: 'danger',
      variant: 'solid',
      class: 'text-white bg-danger hover:bg-danger-hover disabled:bg-danger aria-disabled:bg-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger'
    },
    {
      color: 'danger',
      variant: 'outline',
      class: 'ring ring-inset ring-danger/50 text-danger hover:bg-danger/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-danger'
    },
    {
      color: 'danger',
      variant: 'soft',
      class: 'text-danger bg-danger/10 hover:bg-danger/15 focus-visible:bg-danger/15 disabled:bg-danger/10 aria-disabled:bg-danger/10'
    },
    {
      color: 'danger',
      variant: 'subtle',
      class: 'text-danger ring ring-inset ring-danger/25 bg-danger/10 hover:bg-danger/15 disabled:bg-danger/10 aria-disabled:bg-danger/10 focus-visible:ring-2 focus-visible:ring-danger'
    },
    {
      color: 'danger',
      variant: 'ghost',
      class: 'text-danger hover:bg-danger/10 focus-visible:bg-danger/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
    },
    {
      color: 'danger',
      variant: 'link',
      class: 'text-danger hover:underline hover:text-danger/75 disabled:text-danger aria-disabled:text-danger focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-danger'
    },
    {
      color: 'neutral',
      variant: 'solid',
      class: 'text-[var(--ui-bg)] bg-[var(--ui-bg-inverted)] hover:bg-[var(--ui-bg-inverted)]/90 disabled:bg-[var(--ui-bg-inverted)] aria-disabled:bg-[var(--ui-bg-inverted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-border-inverted)]'
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: 'ring ring-inset ring-[var(--ui-border-accented)] text-[var(--ui-text)] bg-[var(--ui-bg)] hover:bg-[var(--ui-bg-elevated)] disabled:bg-[var(--ui-bg)] aria-disabled:bg-[var(--ui-bg)] focus-visible:ring-2 focus-visible:ring-[var(--ui-border-inverted)]'
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: 'text-[var(--ui-text)] bg-[var(--ui-bg-elevated)] hover:bg-[var(--ui-bg-accented)]/75 focus-visible:bg-[var(--ui-bg-accented)]/75 disabled:bg-[var(--ui-bg-elevated)] aria-disabled:bg-[var(--ui-bg-elevated)]'
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class: 'ring ring-inset ring-[var(--ui-border-accented)] text-[var(--ui-text)] bg-[var(--ui-bg-elevated)] hover:bg-[var(--ui-bg-accented)]/75 disabled:bg-[var(--ui-bg-elevated)] aria-disabled:bg-[var(--ui-bg-elevated)] focus-visible:ring-2 focus-visible:ring-[var(--ui-border-inverted)]'
    },
    {
      color: 'neutral',
      variant: 'ghost',
      class: 'text-[var(--ui-text)] hover:bg-[var(--ui-bg-elevated)] focus-visible:bg-[var(--ui-bg-elevated)] hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent'
    },
    {
      color: 'neutral',
      variant: 'link',
      class: 'text-[var(--ui-text-muted)] hover:underline hover:text-[var(--ui-text)] disabled:text-[var(--ui-text-muted)] aria-disabled:text-[var(--ui-text-muted)] focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[var(--ui-border-inverted)]'
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
      class: {
        base: 'transition-colors duration-200 ease-in-out',
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
   * @values solid, outline, soft, subtle, ghost, link
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
   * @values none, sm, md, lg, xl, full
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
}

export type ButtonSlots = {
  leading(props?: NonNullable<unknown>): any
  default(props?: NonNullable<unknown>): any
  trailing(props?: NonNullable<unknown>): any
}
