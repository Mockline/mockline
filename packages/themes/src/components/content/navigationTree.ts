import { tv, type VariantProps } from 'tailwind-variants'

export const navigationTree = tv({
  slots: {
    root: 'flex w-fit flex-col gap-4',
    sectionTitle: 'truncate font-semibold mb-2',
    section: 'flex flex-col gap-0.5',
    link: 'rounded-base flex items-center gap-2 w-fit',
    activeLink: 'rounded-base flex items-center gap-2 w-fit',
  },
  variants: {
    color: {
      accent: {
        link: 'text-[var(--color-text-tertiary)] hover:text-accent-hover hover:bg-accent/15',
        activeLink: 'bg-accent/15 text-accent',
      },
      neutral: {
        link: 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-translucent)]',
        activeLink: 'bg-[var(--color-bg-translucent)] text-[var(--color-text-primary)]',
      }
    },
    size: {
      xs: {
        sectionTitle: 'text-xs font-semibold',
        link: 'px-1 py-1 text-xs',
        activeLink: 'px-1 py-1 text-xs',
      },
      sm: {
        sectionTitle: 'text-sm font-semibold',
        link: 'px-2 py-1 text-sm',
        activeLink: 'px-2 py-1 text-sm',
      },
      md: {
        sectionTitle: 'text-base font-semibold',
        link: 'px-2 py-1 text-base',
        activeLink: 'px-2 py-1 text-base',
      },
    }
  },
  defaultVariants: {
    color: 'accent',
    size: 'sm',
  }
})

type NavigationTreeVariants = VariantProps<typeof navigationTree>

export type NavigationTreeSlots = {
  header: any
  footer: any
}

export type NavigationTreeLink = {
  title: string;
  path: string;
  icon?: string;
  children?: NavigationTreeLink[];
  active?: boolean;
}

export type NavigationTreeProps = {
  size?: NavigationTreeVariants['size'];
  color?: NavigationTreeVariants['color'];
  links: NavigationTreeLink[];
  class?: string;
}
