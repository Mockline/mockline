import { tv } from 'tailwind-variants'

export const app = tv({
  slots: {
    root: 'bg-[var(--color-bg-primary)]'
  },
  variants: {
    transparent: {
      true: ''
    }
  },
  compoundVariants: [
    {
      transparent: true,
      class: {
        root: 'bg-transparent'
      }
    }
  ]
})

export type AppProps = {
  transparent?: boolean
  class?: string
}
