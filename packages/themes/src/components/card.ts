import { tv, type VariantProps } from 'tailwind-variants'

export const cardTv = tv({
  slots: {
    root: 'relative flex flex-col gap-2 rounded-lg',
    header: 'flex items-center justify-between p-4',
    footer: 'flex items-center justify-between p-4',
    body: 'p-4',
  },
  variants: {
    variant: {
      outline: {
        root: 'border border-(--color-bg-quaternary)',
        header: 'border-b border-(--color-bg-quaternary)',
        footer: 'border-t border-(--color-bg-quaternary)'
      },
      soft: {
        root: 'bg-(--color-bg-secondary)',
        header: 'border-b border-(--color-bg-quinary) bg-transparent',
        footer: 'border-t border-(--color-bg-quinary) bg-transparent'
      },
      subtle: {
        root: 'bg-(--color-bg-secondary) border border-(--color-bg-quinary)',
        header: 'border-b border-(--color-bg-quinary) bg-transparent',
        footer: 'border-t border-(--color-bg-quinary) bg-transparent'
      }
    }
  },
  defaultVariants: {
    variant: 'outline'
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
