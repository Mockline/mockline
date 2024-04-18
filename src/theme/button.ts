export default (config: { colors: string[] }) => ({
  slots: {
    base: 'rounded-lg px-4 py-2 text-white',
    label: '',
    leadingIcon: 'shrink-0',
    trailingIcon: 'shrink-0'
  },
  variants: {
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: '',
      ghost: '',
      link: '',
    },
    size: {
      xs: {
        base: 'text-xs px-2 py-1 gap-1',
        leadingIcon: 'size-4',
      },
      sm: {
        base: 'text-sm px-3 py-2 gap-2',
        leadingIcon: 'size-5',
      },
      md: {
        base: 'text-base px-4 py-2 gap-3',
        leadingIcon: 'size-6',
      },
      lg: {
        base: 'text-lg px-5 py-3 gap-4',
        leadingIcon: 'size-7',
      },
      xl: {
        base: 'text-xl px-6 py-4 gap-5',
        leadingIcon: 'size-8',
      },
    },
    block: {
      true: {
        base: 'w-full',
        trailingIcon: 'ms-auto'
      }
    },
  },
  /*compoundVariants: [
    {
      variant: 'solid',
      class: 'bg-{color}-500 hover:bg-{color}-600 focus:bg-{color}-700'
    },
  ]*/
})
