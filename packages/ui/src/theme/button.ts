import type { ModuleOptions } from '../module'

export default (options: Required<ModuleOptions>): any => ({
  slots: {
    base: ['rounded-md font-medium cursor-pointer inline-flex items-center justify-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-7005', options.theme.transitions && 'transition-colors'],
    label: 'truncate',
    leadingIcon: 'shrink-0',
    leadingAvatar: 'shrink-0',
    trailingIcon: 'shrink-0'
  },
  variants: {
    color: {
      ...Object.fromEntries(options.theme.colors.map((color: string) => [color, ''])),
      white: '',
      gray: '',
      black: ''
    },
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: '',
      ghost: '',
      link: ''
    },
    rounded: {
      none: '',
      sm: {
        base: 'rounded-sm'
      },
      md: {
        base: 'rounded-md'
      },
      lg: {
        base: 'rounded-lg'
      },
      xl: {
        base: 'rounded-xl'
      },
      full: {
        base: 'rounded-full'
      }
    },
    size: {
      xs: {
        base: 'px-2 py-1 text-xs gap-1',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4'
      },
      sm: {
        base: 'px-2.5 py-1.5 text-xs gap-1.5',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4'
      },
      md: {
        base: 'px-2.5 py-1 text-sm gap-1.5',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4'
      },
      lg: {
        base: 'px-3 py-2 text-sm gap-2',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5'
      },
      xl: {
        base: 'px-3 py-2 text-base gap-2',
        leadingIcon: 'size-6',
        trailingIcon: 'size-6'
      }
    },
    block: {
      true: {
        base: 'w-full',
        trailingIcon: 'ms-auto'
      }
    },
    square: {
      true: ''
    },
    leading: {
      true: ''
    },
    trailing: {
      true: ''
    },
    loading: {
      true: ''
    }
  },
  compoundVariants: [
    ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'solid',
      class: `text-white dark:text-gray-900 bg-${color}-500 hover:bg-${color}-600 disabled:bg-${color}-500 aria-disabled:bg-${color}-500 dark:bg-${color}-400 dark:hover:bg-${color}-500 dark:disabled:bg-${color}-400 dark:aria-disabled:bg-${color}-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-500 dark:focus-visible:outline-${color}-400`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'outline',
      class: `ring ring-inset ring-${color}-500/50 dark:ring-${color}-400/50 text-${color}-500 dark:text-${color}-400 hover:bg-${color}-500/10 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-${color}-400/10 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'soft',
      class: `text-${color}-500 dark:text-${color}-400 bg-${color}-500/10 hover:bg-${color}-500/15 focus-visible:bg-${color}-500/15 disabled:bg-${color}-500/10 aria-disabled:bg-${color}-500/10 dark:bg-${color}-400/10 dark:hover:bg-${color}-400/15 dark:focus-visible:bg-${color}-400/15 dark:disabled:bg-${color}-400/10 dark:aria-disabled:bg-${color}-400/10`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'subtle',
      class: `text-${color}-500 dark:text-${color}-400 ring ring-inset ring-${color}-500/25 dark:ring-${color}-400/25 bg-${color}-500/10 hover:bg-${color}-500/15 disabled:bg-${color}-500/10 aria-disabled:bg-${color}-500/10 dark:bg-${color}-400/10 dark:hover:bg-${color}-400/15 dark:disabled:bg-${color}-400/10 dark:aria-disabled:bg-${color}-400/10 focus-visible:ring-2 focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'ghost',
      class: `text-${color}-500 dark:text-${color}-400 hover:bg-${color}-500/10 focus-visible:bg-${color}-500/10 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-${color}-400/10 dark:focus-visible:bg-${color}-400/10 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'link',
      class: `text-${color}-500 hover:text-${color}-600 disabled:text-${color}-500 aria-disabled:text-${color}-500 dark:text-${color}-400 dark:hover:text-${color}-500 dark:disabled:text-${color}-400 dark:aria-disabled:text-${color}-400 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-500 dark:focus-visible:ring-${color}-400`
    })), {
      size: 'xs',
      square: true,
      class: 'p-1'
    }, {
      size: 'sm',
      square: true,
      class: 'p-1.5'
    }, {
      size: 'md',
      square: true,
      class: 'p-1.5'
    }, {
      size: 'lg',
      square: true,
      class: 'p-2'
    }, {
      size: 'xl',
      square: true,
      class: 'p-2'
    }, {
      loading: true,
      leading: true,
      class: {
        leadingIcon: 'animate-spin'
      }
    }, {
      loading: true,
      leading: false,
      trailing: true,
      class: {
        trailingIcon: 'animate-spin'
      }
    }
  ],
  defaultVariants: {
    color: 'primary',
    variant: 'solid',
    rounded: 'md',
    size: 'md'
  }
})
