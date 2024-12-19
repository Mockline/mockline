import { tv } from 'tailwind-variants'

export const input = tv({
// Component base class (if no slots needed)
  base: 'relative flex items-center',
  // Variants definition
  variants: {
    color: {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-secondary-500 text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    }
  },
  // Slots configuration
  slots: {
    root: 'flex w-full',
    label: 'font-medium',
    icon: 'w-4 h-4'
  },
  // Default values
/*  defaults: {
    color: 'primary',
    size: 'md'
  }*/
})

export type InputProps = {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  label?: string
  // color?: SwitchVariants['color']
  // size?: SwitchVariants['size']
  square?: boolean
  block?: boolean
  class?: string
  iconClass?: string
  indicatorClass?: string
  labelClass?: string
  // disabled?: boolean
  // required?: boolean
  /** When `true`, the loading icon will be displayed. */
  loading?: boolean
  /**
   * The icon when the `loading` prop is `true`.
   * @defaultValue appConfig.ui.icons.loading
   */
  loadingIcon?: string
}

export type InputSlots = {
  label(props: { label?: string }): any
}

export type InputEmits = {
  change: [payload: Event]
}
