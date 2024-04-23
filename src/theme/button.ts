import { colors } from '#mockline/colors'

export default {
  base: 'text-white',
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
      ...Object.fromEntries(colors.map(color => [color, ''])),
    },
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-1 text-base',
      lg: 'px-4 py-2 text-lg'
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    },
    block: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    variant: 'solid',
    color: 'iris',
    size: 'md'
  },
  compoundVariants: [
    ...colors.map(color => ({
      variant: 'solid',
      color: `${color}`,
      class: `bg-${color}-9 hover:bg-${color}-10`
    })),
    ...colors.map(color => ({
      variant: 'outline',
      color: `${color}`,
      class: `border border-${color}-9 text-${color}-9 hover:bg-${color}-9 hover:text-${color}-1`
    })),
    ...colors.map(color => ({
      variant: 'soft',
      color: `${color}`,
      class: `bg-${color}-2 text-${color}-9 hover:bg-${color}-3`
    })),
    ...colors.map(color => ({
      variant: 'subtle',
      color: `${color}`,
      class: `bg-${color}-3 text-${color}-9 hover:bg-${color}-4`
    })),
    ...colors.map(color => ({
      variant: 'ghost',
      color: `${color}`,
      class: `text-${color}-9 hover:bg-${color}-3`
    })),
    ...colors.map(color => ({
      variant: 'link',
      color: `${color}`,
      class: `text-${color}-9 hover:underline`
    }))
  ]
}
