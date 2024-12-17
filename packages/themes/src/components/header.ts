import { tv, type VariantProps } from 'tailwind-variants'

export const header = tv({
  base: 'flex items-center justify-between w-full h-[var(--header-height)] px-4 py-2 bg-[var(--content-area-bg)]',
  variants: {
    sticky: {
      true: 'sticky top-0 z-10',
    },
    transparent: {
      true: 'bg-transparent',
    }
  }
})

export type HeaderVariants = VariantProps<typeof header>

export type HeaderProps = {
  class?: string,
  sticky?: boolean,
  transparent?: boolean,
}

export type HeaderSlots = {
  left: any,
  default: any,
  right: any,
}
