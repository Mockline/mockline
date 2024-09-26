import type { ModuleOptions } from '../module'

export default (options: Required<ModuleOptions>): any => ({
  slots: {
    base: ['rounded-md font-medium inline-flex items-center justify-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-7005', options.theme.transitions && 'transition-colors'],
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
      class: `shadow-sm text-white bg-${color}-600 hover:bg-${color}-700 disabled:bg-${color}-750 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-8`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'outline',
      class: `ring-2 text-${color}-750 hover:bg-${color}-10 hover:text-white disabled:bg-transparent ring-${color}-600 hover:ring-${color}-900`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'soft',
      class: `text-${color}-750 bg-${color}-800 hover:bg-${color}-100 disabled:bg-${color}-800`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'subtle',
      class: `text-${color}-750 bg-${color}-750/10 hover:bg-${color}-750/20 disabled:bg-${color}-750/10`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'ghost',
      class: `text-${color}-750 hover:bg-${color}-800 disabled:bg-transparent`
    })), ...options.theme.colors.map((color: string) => ({
      color,
      variant: 'link',
      class: `text-${color}-750 hover:text-${color}-700 disabled:text-${color}-750 hover:underline`
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
