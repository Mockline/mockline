import type { VariantProps } from 'tailwind-variants'
import { buttonTheme } from '../components'

type ButtonVariants = VariantProps<typeof buttonTheme>

export type ButtonProps = {
  label?: string
  color?: ButtonVariants['color']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  rounded?: ButtonVariants['rounded']
  square?: boolean
  block?: boolean
  class?: string
  iconClass?: string
  labelClass?: string
}

export type ButtonSlots = {
  leading(props?: NonNullable<unknown>): any
  default(props?: NonNullable<unknown>): any
  trailing(props?: NonNullable<unknown>): any
}
