import { tv } from 'tailwind-variants'

export const avatarGroup = tv({
  slots: {
    base: 'flex items-center -space-x-[var(--overlap)] relative',
    remainder: 'flex items-center justify-center ring-[2px] ring-[var(--content-area-bg)] bg-[var(--color-bg-quaternary)] text-[var(--color-text-secondary)] font-medium',
  },
  variants: {
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
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
