import { tv } from 'tailwind-variants'

export const avatarGroup = tv({
  slots: {
    root: 'flex items-center -space-x-[var(--overlap)] relative',
    base: 'relative rounded-full first:me-0 ring-[var(--content-area-bg)] bg-[var(--color-bg-quaternary)] text-[var(--color-text-secondary)]',
  },
  variants: {
    size: {
      '3xs': {
        base: 'ring -me-0.5'
      },
      '2xs': {
        base: 'ring -me-0.5'
      },
      xs: {
        base: 'ring -me-0.5'
      },
      sm: {
        base: 'ring-2 -me-1.5'
      },
      md: {
        base: 'ring-2 -me-1.5'
      },
      lg: {
        base: 'ring-2 -me-1.5'
      },
      xl: {
        base: 'ring-3 -me-2'
      },
      '2xl': {
        base: 'ring-3 -me-2'
      },
      '3xl': {
        base: 'ring-3 -me-2'
      }
    },
  },
  defaultVariants: {
    size: 'md',
  },
  compoundVariants: [],
  compoundSlots: [],
})

export type AvatarGroupSlots = {
  default(props?: object): any
}

export type AvatarGroupProps = {
  max?: number
  size?: string
  limit?: number
  overlap?: number | string
}
