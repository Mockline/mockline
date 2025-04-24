import { tv, type VariantProps } from 'tailwind-variants'

export const navigationTree = tv({
  slots: {
    root: 'flex flex-col gap-4',
    section: 'flex flex-col gap-0.5',
    sectionTitle: 'truncate font-semibold mb-2',
    link: [
      'rounded-base flex items-center gap-2',
      'text-[var(--color-text-tertiary)]',
    ],
    badge: 'ml-auto text-xs px-1.5 py-0.5 rounded-base',
    description: 'text-xs text-[var(--color-text-tertiary)]',
    icon: 'flex-shrink-0',
  },
  variants: {
    color: {
      accent: {
        link: [
          'hover:text-accent-hover hover:bg-accent/15',
          'data-[active=true]:bg-accent/15 data-[active=true]:text-accent data-[active=true]:font-bold',
          'data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed',
        ],
        badge: 'bg-accent/15 text-accent',
      },
      neutral: {
        link: [
          'hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-translucent)]',
          'data-[active=true]:bg-[var(--color-bg-translucent)] data-[active=true]:text-[var(--color-text-primary)] data-[active=true]:font-semibold',
          'data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed',
        ],
        badge: 'bg-[var(--color-bg-translucent)] text-[var(--color-text-primary)]',
      }
    },
    size: {
      xs: {
        sectionTitle: 'text-xs',
        link: 'px-2 py-1 text-xs',
        icon: 'size-3',
      },
      sm: {
        sectionTitle: 'text-sm',
        link: 'px-2 py-1 text-sm',
        icon: 'size-4',
      },
      md: {
        sectionTitle: 'text-base',
        link: 'px-3 py-1.5 text-base',
        icon: 'size-5',
      },
    },
    indent: {
      true: {
        link: 'ml-4',
      }
    },
    transitions: {
      true: ''
    }
  },
  compoundVariants: [
    {
      transitions: true,
      class: {
        link: 'transition-colors duration-200',
      }
    }
  ],
  defaultVariants: {
    color: 'accent',
    size: 'sm',
    indent: false,
  }
})

type NavigationTreeVariants = VariantProps<typeof navigationTree>

export type NavigationTreeLink = {
  title: string;
  path: string;
  icon?: string;
  children?: NavigationTreeLink[];
  active?: boolean;
  disabled?: boolean;
  badge?: string | number;
  exact?: boolean;
}

export type NavigationTreeProps = {
  size?: NavigationTreeVariants['size'];
  color?: NavigationTreeVariants['color'];
  links: NavigationTreeLink[];
  class?: string;
  linkClass?: string;
  titleClass?: string;
  iconClass?: string;
  badgeClass?: string;
}

export type NavigationTreeSlots = {
  header: (props: { links: NavigationTreeLink[] }) => any
  footer: (props: { links: NavigationTreeLink[] }) => any
  icon: (props: { item: NavigationTreeLink, active: boolean }) => any
  badge: (props: { item: NavigationTreeLink, active: boolean }) => any
  title: (props: { item: NavigationTreeLink, active: boolean }) => any
}
