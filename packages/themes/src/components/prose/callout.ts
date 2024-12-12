import { tv, VariantProps } from 'tailwind-variants'

export const proseCallout = tv({
  slots: {
    base: 'group border relative block rounded-[calc(var(--ui-radius)*1.5)] px-4 py-3 text-sm/6 my-5',
    icon: 'size-4 shrink-0 align-middle mr-1.5',
    externalIcon: 'size-4 align-top absolute right-2 top-2 pointer-events-none',
  },
  variants: {
    color: {
      neutral: {
        base: 'dark:bg-neutral-950/25 dark:border-neutral-500/20 border-neutral-400/10 bg-neutral-300/20',
        icon: 'text-gray-600',
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
    transition: {
      true: '',
    }
  },
  compoundVariants: [
    {
      color: 'neutral',
      link: true,
      class: 'hover:bg-neutral-600/10 dark:hover:bg-neutral-750/30 hover:border-neutral-600/20 dark:hover:border-neutral-700/20'
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
  color?: CalloutVariants['color']
}

export type CalloutSlots = {
  default(props?: object): any
}

export default proseCallout
