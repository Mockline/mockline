import { tv } from 'tailwind-variants'

export const themeToggle = tv({
  base: 'cursor-pointer text-[var(--color-text-primary)] select-none',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export type ThemeToggleProps = {
  /** Theme toggle class to override */
  class?: string;
  /** Theme toggle size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  lightIcon?: string;
  darkIcon?: string;
}
