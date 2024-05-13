export default (config: { colors: string[] }) => ({
  base: 'flex items-center justify-center gap-1 text-white cursor-pointer',
  variants: {
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: '',
      ghost: '',
      link: '',
    },
    color: {
      ...Object.fromEntries(config.colors.map(color => [color, ''])),
    },
    size: {
      '2xs': 'text-xs gap-x-1 px-1 py-0.5',
      xs: 'text-xs gap-x-1.5 px-2 py-1',
      sm: 'text-sm gap-x-1.5 px-2 py-1',
      md: 'text-base gap-x-2 px-3 py-1.5',
      lg: 'text-lg gap-x-2.5 px-4 py-2',
      xl: 'text-xl gap-x-2.5 px-5 py-2.5',
    },
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
    block: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    rounded: 'md',
  },
  compoundVariants: [
    ...config.colors.map(color => ({
      color,
      variant: 'solid',
      class: `bg-${color}-9 hover:bg-${color}-10`
    })),
    ...config.colors.map(color => ({
      color,
      variant: 'outline',
      class: `border border-${color}-9 text-${color}-9 hover:bg-${color}-9 hover:text-${color}-1`
    })),
    ...config.colors.map(color => ({
      color,
      variant: 'soft',
      class: `bg-${color}-2 text-${color}-9 hover:bg-${color}-3`
    })),
    ...config.colors.map(color => ({
      color,
      variant: 'subtle',
      class: `bg-${color}-3 text-${color}-9 hover:bg-${color}-4`
    })),
    ...config.colors.map(color => ({
      color,
      variant: 'ghost',
      class: `text-${color}-9 hover:bg-${color}-3`
    })),
    ...config.colors.map(color => ({
      color,
      variant: 'link',
      class: `text-${color}-9 hover:underline`
    }))
  ]
})
