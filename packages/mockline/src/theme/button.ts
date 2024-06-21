import type { ModuleOptions } from '#mockline/types'

export default (options: Required<ModuleOptions>) => ({
  slots: {
    base: ['rounded-md font-medium inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75', options.transitions && 'transition-colors'],
    label: 'truncate',
    leadingIcon: 'shrink-0',
    leadingAvatar: 'shrink-0',
    trailingIcon: 'shrink-0'
  },
  variants: {
    color: {
      ...Object.fromEntries(options.colors.map((color: string) => [color, ''])),
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
        base: 'px-2.5 py-1.5 text-sm gap-1.5',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5'
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
    ...options.colors.map((color: string) => ({
      color,
      variant: 'solid',
      class: `shadow-sm text-white dark:text-primary-1 bg-${color}-8 hover:bg-${color}-7 disabled:bg-${color}-8 dark:bg-${color}-9 dark:hover:bg-${color}-8 dark:disabled:bg-${color}-9 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-8 dark:focus-visible:outline-${color}-9`
    })), ...options.colors.map((color: string) => ({
      color,
      variant: 'outline',
      class: `ring ring-inset ring-current text-${color}-8 dark:text-${color}-9 hover:bg-${color}-12 disabled:bg-transparent dark:hover:bg-${color}-912 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-${color}-8 dark:focus-visible:ring-${color}-9`
    })), ...options.colors.map((color: string) => ({
      color,
      variant: 'soft',
      class: `text-${color}-8 dark:text-${color}-9 bg-${color}-12 hover:bg-${color}-100 disabled:bg-${color}-12 dark:bg-${color}-912 dark:hover:bg-${color}-1 dark:disabled:bg-${color}-912 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-8 dark:focus-visible:ring-${color}-9`
    })), ...options.colors.map((color: string) => ({
      color,
      variant: 'subtle',
      class: `text-${color}-8 dark:text-${color}-9 ring ring-inset ring-${color}-8/25 dark:ring-${color}-9/25 bg-${color}-8/10 hover:bg-${color}-8/20 disabled:bg-${color}-8/10 dark:bg-${color}-9/10 dark:hover:bg-${color}-9/20 dark:disabled:bg-${color}-9/10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-8 dark:focus-visible:ring-${color}-9`
    })), ...options.colors.map((color: string) => ({
      color,
      variant: 'ghost',
      class: `text-${color}-8 dark:text-${color}-9 hover:bg-${color}-12 disabled:bg-transparent dark:hover:bg-${color}-912 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-8 dark:focus-visible:ring-${color}-9`
    })), ...options.colors.map((color: string) => ({
      color,
      variant: 'link',
      class: `text-${color}-8 hover:text-${color}-7 disabled:text-${color}-8 dark:text-${color}-9 dark:hover:text-${color}-8 dark:disabled:text-${color}-9 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}-8 dark:focus-visible:ring-${color}-9`
    })), {
      color: 'white',
      variant: 'solid',
      class: 'shadow-sm ring ring-inset ring-gray-300 dark:ring-gray-6 text-primary-1 dark:text-white bg-white hover:bg-canvas-12 disabled:bg-white dark:bg-canvas-1 dark:hover:bg-canvas-800 dark:disabled:bg-canvas-1 focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
      color: 'white',
      variant: 'ghost',
      class: 'text-primary-1 dark:text-white hover:bg-white disabled:bg-transparent dark:hover:bg-canvas-1 dark:disabled:bg-transparent focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
      color: 'white',
      variant: 'link',
      class: 'text-primary-1 hover:text-primary-8 disabled:text-primary-1 dark:text-white dark:hover:text-primary-9 dark:disabled:text-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
      color: 'gray',
      variant: 'solid',
      class: 'shadow-sm ring ring-inset ring-gray-300 dark:ring-gray-6 text-primary-6 dark:text-primary-10 bg-canvas-12 hover:bg-canvas-100 disabled:bg-canvas-12 dark:bg-canvas-800 dark:hover:bg-canvas-6/12 dark:disabled:bg-canvas-800 focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
      color: 'gray',
      variant: 'ghost',
      class: 'text-primary-6 dark:text-primary-10 hover:bg-canvas-12 disabled:bg-transparent dark:hover:bg-canvas-800 dark:hover:disabled:bg-transparent focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
      color: 'gray',
      variant: 'link',
      class: 'text-primary-8 hover:text-primary-6 disabled:text-primary-8 dark:text-primary-9 dark:hover:text-primary-10 dark:disabled:text-primary-9 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
      color: 'black',
      variant: 'solid',
      class: 'shadow-sm text-white dark:text-primary-1 bg-canvas-1 hover:bg-canvas-800 disabled:bg-canvas-1 dark:bg-white dark:hover:bg-canvas-10 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
      color: 'black',
      variant: 'ghost',
      class: 'text-primary-1 hover:text-white disabled:text-primary-1 dark:text-white dark:hover:text-primary-1 dark:disabled:text-white hover:bg-canvas-1 disabled:bg-transparent dark:hover:bg-white dark:disabled:bg-transparent focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
      color: 'black',
      variant: 'link',
      class: 'text-primary-1 hover:text-primary-8 disabled:text-primary-1 dark:text-white dark:hover:text-primary-9 dark:disabled:text-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-8 dark:focus-visible:ring-primary-9'
    }, {
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
    size: 'md'
  }
})
