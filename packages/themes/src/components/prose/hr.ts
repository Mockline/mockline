import { tv, type VariantProps } from 'tailwind-variants'

export const proseHr = tv({
  slots: {
    root: 'flex items-center align-center text-center',
    border: '',
    container: [
      'font-medium',
      'text-[var(--color-fg-secondary)]',
      'flex'
    ],
    icon: 'shrink-0 size-5',
    label: 'text-sm'
  },
  variants: {
    color: {
      primary: {
        border: 'border-accent'
      },
      neutral: {
        border: 'border-[var(--color-border-primary)]'
      }
    },
    orientation: {
      horizontal: {
        root: 'w-full flex-row',
        border: 'w-full',
        container: 'mx-3 whitespace-nowrap'
      },
      vertical: {
        root: 'h-full flex-col',
        border: 'h-full',
        container: 'my-2'
      }
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: ''
    },
    variant: {
      solid: {
        border: 'border-solid'
      },
      dashed: {
        border: 'border-dashed'
      },
      dotted: {
        border: 'border-dotted'
      },
      gradient: {
        border: 'bg-gradient-to-r from-transparent via-[var(--color-border-primary)] to-transparent border-none h-px'
      }
    }
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      size: 'xs',
      class: { border: 'border-t' }
    },
    {
      orientation: 'horizontal',
      size: 'sm',
      class: { border: 'border-t-[2px]' }
    },
    {
      orientation: 'horizontal',
      size: 'md',
      class: { border: 'border-t-[3px]' }
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      class: { border: 'border-t-[4px]' }
    },
    {
      orientation: 'horizontal',
      size: 'xl',
      class: { border: 'border-t-[5px]' }
    },
    {
      orientation: 'vertical',
      size: 'xs',
      class: { border: 'border-s' }
    },
    {
      orientation: 'vertical',
      size: 'sm',
      class: { border: 'border-s-[2px]' }
    },
    {
      orientation: 'vertical',
      size: 'md',
      class: { border: 'border-s-[3px]' }
    },
    {
      orientation: 'vertical',
      size: 'lg',
      class: { border: 'border-s-[4px]' }
    },
    {
      orientation: 'vertical',
      size: 'xl',
      class: { border: 'border-s-[5px]' }
    }
  ],
  defaultVariants: {
    color: 'neutral',
    size: 'xs',
    variant: 'solid'
  }
})

type ProseHrVariants = VariantProps<typeof proseHr>

export type ProseHrSlots = {
  default: string
}

export type ProseHrProps = {
  label?: string
  icon?: string
  color?: ProseHrVariants['color']
  size?: ProseHrVariants['size']
  variant?: ProseHrVariants['variant']
  orientation?: ProseHrVariants['orientation']
  class?: string
  borderClass?: string
  labelClass?: string
  iconClass?: string
}
