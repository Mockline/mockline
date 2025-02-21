import { tv, type VariantProps } from 'tailwind-variants'


export const avatar = tv({
  slots: {
    base: 'relative inline-flex items-center justify-center',
    image: 'h-full w-full rounded-[inherit] object-cover',
    fallback: 'flex items-center justify-center bg-[var(--color-bg-quaternary)] text-[var(--color-text-primary)] border-[0.3px] border-[var(--color-text-primary)]',
  },
  variants: {
    rounded: {
      base: { base: 'rounded-full' },
      fallback: { fallback: 'rounded-full' },
    },
    size: {
      xs: {
        base: 'size-6',
        fallback: 'text-xs',
      },
      sm: {
        base: 'size-8',
        fallback: 'text-sm',
      },
      md: {
        base: 'size-10',
        fallback: 'text-md',
      },
      lg: {
        base: 'size-12',
        fallback: 'text-lg',
      },
      xl: {
        base: 'size-14',
        fallback: 'text-xl',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    rounded: 'base',
    size: 'md',
  },
})

type AvatarVariants = VariantProps<typeof avatar>

export type AvatarProps = {
  src?: string
  size?: AvatarVariants['size']
  alt?: string
}
