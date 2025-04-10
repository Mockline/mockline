import { tv, type VariantProps } from 'tailwind-variants'

export const cardTv = tv({
  slots: {
    root: 'relative flex flex-col gap-2 rounded-lg border bg-[var(--color-bg-primary)] shadow-sm border-none',
    header: 'flex items-center justify-between p-4',
    footer: 'flex items-center justify-between p-4',
    body: 'p-4',
  },
  variants: {
    variant: {
      primary: {
        root: 'border-transparent',
        header: 'border-b border-(--color-bg-secondary)',
        footer: 'border-t border-(--color-bg-secondary)'
      },
      secondary: {
        root: 'border-(--color-bg-secondary)',
        header: 'border-b border-(--color-bg-tertiary)',
        footer: 'border-t border-(--color-bg-tertiary)'
      },
      neutral: {
        root: 'border-(--color-fg-primary)',
        header: 'border-b border-(--color-fg-secondary)',
        footer: 'border-t border-(--color-fg-secondary)'
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  },
})

type CardVariants = VariantProps<typeof cardTv>

export type CardProps = {
  variant?: CardVariants['variant']
  class?: string;
}

export type CardSlots = {
  default: any
  header?: any
  footer?: any
}
