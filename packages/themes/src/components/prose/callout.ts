import { tv, type VariantProps } from 'tailwind-variants'

export const proseCallout = tv({
  slots: {
    base: 'group border relative block rounded-base px-4 py-3 text-sm/6 my-5',
    icon: 'size-4 shrink-0 align-middle mr-1.5',
    externalWrapper: 'align-top absolute -right-2.5 -top-2.5',
    externalIcon: 'bg-[var(--color-bg-level-2)] border-[var(--color-border-tertiary)]/50 text-[var(--color-text-primary)] group-hover:bg-[var(--color-bg-level-3)] group-hover:border-[var(--color-border-tertiary)]'
  },
  variants: {
    color: {
      neutral: {
        base: 'bg-[var(--color-bg-level-2)] border-[var(--color-border-tertiary)]/50 text-[var(--color-text-primary)]',
      },
      warning: {
        base: 'dark:border-yellow-500/20 dark:bg-yellow-800/5 border-yellow-500/30 bg-yellow-500/10 text-yellow-600',
        icon: 'text-yellow-600',
      },
      danger: {
        base: 'dark:border-red-500/20 dark:bg-red-800/5 border-red-500/30 bg-red-500/10 text-red-600',
        icon: 'text-red-600',
      },
      success: {
        base: 'dark:border-green-500/20 dark:bg-green-800/5 border-green-500/30 bg-green-500/10 text-green-600',
        icon: 'text-green-600',
      },
      info: {
        base: 'dark:border-blue-500/20 dark:bg-blue-800/5 border-blue-500/30 bg-blue-500/10 text-blue-600',
        icon: 'text-blue-600',
      },
    },
    link: {
      true: '',
    },
    transitions: {
      true: '',
    }
  },
  compoundVariants: [
    {
      color: 'neutral',
      link: true,
      class: {
        base: 'hover:bg-[var(--color-bg-level-3)] hover:border-[var(--color-border-tertiary)]',
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
    color: 'neutral'
  }
})

type CalloutVariants = VariantProps<typeof proseCallout>

export type ProseCalloutProps = {
  class?: any
  type?: string
  icon?: string
  to?: string
  target?: string
  transitions?: boolean
  color?: CalloutVariants['color']
}

export type CalloutSlots = {
  default(props?: object): any
}
