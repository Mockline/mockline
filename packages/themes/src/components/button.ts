import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  slots: {
    base: ['cursor-pointer font-medium inline-flex items-center justify-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',],
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
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class: 'text-[var(--ui-bg)] bg-[var(--ui-primary)] hover:bg-[var(--ui-primary)]/75 disabled:bg-[var(--ui-primary)] aria-disabled:bg-[var(--ui-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-primary)]'
    },
    {
      color: 'primary',
      variant: 'outline',
      class: 'ring ring-inset ring-[var(--ui-primary)]/50 text-[var(--ui-primary)] hover:bg-[var(--ui-primary)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--ui-primary)]'
    },
    {
      color: 'primary',
      variant: 'soft',
      class: 'text-[var(--ui-primary)] bg-[var(--ui-primary)]/10 hover:bg-[var(--ui-primary)]/15 focus-visible:bg-[var(--ui-primary)]/15 disabled:bg-[var(--ui-primary)]/10 aria-disabled:bg-[var(--ui-primary)]/10'
    },
    {
      color: 'primary',
      variant: 'subtle',
      class: 'text-[var(--ui-primary)] ring ring-inset ring-[var(--ui-primary)]/25 bg-[var(--ui-primary)]/10 hover:bg-[var(--ui-primary)]/15 disabled:bg-[var(--ui-primary)]/10 aria-disabled:bg-[var(--ui-primary)]/10 focus-visible:ring-2 focus-visible:ring-[var(--ui-primary)]'
    },
    {
      color: 'primary',
      variant: 'ghost',
      class: 'text-[var(--ui-primary)] hover:bg-[var(--ui-primary)]/10 focus-visible:bg-[var(--ui-primary)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
    },
    {
      color: 'primary',
      variant: 'link',
      class: 'text-[var(--ui-primary)] hover:underline hover:text-[var(--ui-primary)]/75 disabled:text-[var(--ui-primary)] aria-disabled:text-[var(--ui-primary)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]'
    },
    {
      color: 'danger',
      variant: 'solid',
      class: 'text-[var(--ui-bg)] bg-[var(--ui-danger)] hover:bg-[var(--ui-danger)]/75 disabled:bg-[var(--ui-danger)] aria-disabled:bg-[var(--ui-danger)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-danger)]'
    },
    {
      color: 'danger',
      variant: 'outline',
      class: 'ring ring-inset ring-[var(--ui-danger)]/50 text-[var(--ui-danger)] hover:bg-[var(--ui-danger)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--ui-danger)]'
    },
    {
      color: 'danger',
      variant: 'soft',
      class: 'text-[var(--ui-danger)] bg-[var(--ui-danger)]/10 hover:bg-[var(--ui-danger)]/15 focus-visible:bg-[var(--ui-danger)]/15 disabled:bg-[var(--ui-danger)]/10 aria-disabled:bg-[var(--ui-danger)]/10'
    },
    {
      color: 'danger',
      variant: 'subtle',
      class: 'text-[var(--ui-danger)] ring ring-inset ring-[var(--ui-danger)]/25 bg-[var(--ui-danger)]/10 hover:bg-[var(--ui-danger)]/15 disabled:bg-[var(--ui-danger)]/10 aria-disabled:bg-[var(--ui-danger)]/10 focus-visible:ring-2 focus-visible:ring-[var(--ui-danger)]'
    },
    {
      color: 'danger',
      variant: 'ghost',
      class: 'text-[var(--ui-danger)] hover:bg-[var(--ui-danger)]/10 focus-visible:bg-[var(--ui-danger)]/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
    },
    {
      color: 'danger',
      variant: 'link',
      class: 'text-[var(--ui-danger)] hover:underline hover:text-[var(--ui-danger)]/75 disabled:text-[var(--ui-danger)] aria-disabled:text-[var(--ui-danger)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-danger)]'
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
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    rounded: 'md',
    size: 'md',
  },
})

type ButtonVariants = VariantProps<typeof button>

export type ButtonProps = {
  label?: string
  color?: ButtonVariants['color']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  rounded?: ButtonVariants['rounded']
  square?: boolean
  block?: boolean
  class?: string
  iconClass?: string
  labelClass?: string
}

export default button
