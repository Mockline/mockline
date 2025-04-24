import { tv } from 'tailwind-variants'

export const pageSectionTv = tv({
  slots: {
    root: 'relative isolate',
    container: 'flex py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16',
    wrapper: 'max-w-3xl',
    headline: 'mb-3 text-(--color-accent) font-bold',
    leading: 'flex items-center mb-6 justify-center',
    leadingIcon: 'size-10 shrink-0 text-primary text-(--color-accent)',
    title: 'text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted',
    description: 'text-base font-medium sm:text-lg text-(--color-text-tertiary) mt-6',
  },
  variants: {
    orientation: {
      horizontal: {
        container: 'lg:grid lg:grid-cols-2 lg:items-center flex-row',
      },
      vertical: {
        container: 'items-center flex-col max-w-auto',
        headline: 'text-center',
        leading: 'justify-center',
        title: 'text-center',
        description: 'text-center text-balance',
      }
    },
    reverse: {
      true: {
        wrapper: 'lg:order-last'
      }
    },
    align: {
      left: {
        wrapper: 'text-left mr-auto',
      },
      center: {
        wrapper: 'text-center mx-auto',
      },
      right: {
        wrapper: 'text-right ml-auto',
      }
    }
  },
  defaultVariants: {
    align: 'center',
    orientation: 'horizontal'
  }
})

export type PageSectionProps = {
  as?: any
  headline?: string
  icon?: string
  title?: string
  description?: string
  class?: string
  align?: 'left' | 'center' | 'right'
  orientation?: 'horizontal' | 'vertical'
  reverse?: boolean
}

export type PageSectionSlots = {
  default?: any
  title?: any
  description?: any
  headline?: any
  leading?: any
}
