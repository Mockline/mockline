import { tv, type VariantProps } from 'tailwind-variants'

export const navMenu = tv({
  slots: {
    content: 'group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] absolute left-0 top-0 w-full data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] sm:w-auto',
    viewport: 'bg-neutral border border-[var(--ui-border)] relative mt-[10px] h-[var(--reka-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] transition-[width,_height] duration-300 data-[state=closed]:animate-[scale-out_200ms_ease] data-[state=open]:animate-[scale-in_200ms_ease] sm:w-[var(--reka-navigation-menu-viewport-width)]'
  },
  variants: {
    color: {
      primary: 'text-primary-500 hover:bg-[var(--ui-bg-accented)] focus:shadow-[var(--ui-bg-inverted)]',
      white: 'hover:bg-[var(--ui-bg-accented)] focus:shadow-[var(--ui-bg-inverted)] text-neutral-700',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

type NavMenuVariants = VariantProps<typeof navMenu>

export type NavMenuProps = {
  orientation?: 'horizontal' | 'vertical'
  color?: NavMenuVariants['color']
  items: {
    title: string
    path: string
    slot?: string
  }[]
}
