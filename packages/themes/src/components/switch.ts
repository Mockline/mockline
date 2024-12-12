import { tv, type VariantProps } from 'tailwind-variants'

export const switchTv = tv({
  slots: {
    base: 'w-[32px] h-[20px] shadow-sm flex data-[state=unchecked]:bg-stone-300 data-[state=checked]:bg-stone-800 dark:data-[state=unchecked]:bg-stone-800 dark:data-[state=checked]:bg-stone-700 border border-stone-300 data-[state=checked]:border-stone-700  dark:border-stone-700 rounded-full relative transition-[background] focus-within:outline-none focus-within:shadow-[0_0_0_1px] focus-within:border-stone-800 focus-within:shadow-stone-800',
    label: '',
    indicator: 'w-3.5 h-3.5 my-auto bg-white text-xs flex items-center justify-center shadow-xl rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-full',
  },
  variants: {
    color: {
      neutral: '',
      primary: '',
    },
    variant: {
      solid: '',
    },
    loading: {
      true: '',
    },
    transitions: {
      true: '',
    }
  },
  /*  compoundVariants: [
    {
      color: 'primary',
      variant: 'solid',
      class: 'text-[var(--ui-bg)] aria-disabled:bg-[var(--ui-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-primary)]'
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
      class: 'text-[var(--ui-${color})] hover:text-[var(--ui-${color})]/75 disabled:text-[var(--ui-${color})] aria-disabled:text-[var(--ui-${color})] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-${color})]'
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
      class: 'text-[var(--ui-${color})] hover:text-[var(--ui-${color})]/75 disabled:text-[var(--ui-${color})] aria-disabled:text-[var(--ui-${color})] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-${color})]'
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
      class: 'text-[var(--ui-text-muted)] hover:text-[var(--ui-text)] disabled:text-[var(--ui-text-muted)] aria-disabled:text-[var(--ui-text-muted)] focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[var(--ui-border-inverted)]'
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
  ],*/
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
}
export type SwitchSlots = {
  label(props?: NonNullable<unknown>): any
}
