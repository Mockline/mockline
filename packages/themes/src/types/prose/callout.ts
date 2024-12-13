import type { VariantProps } from 'tailwind-variants'
import { proseCallout } from '../../components'

type CalloutVariants = VariantProps<typeof proseCallout>

export type ProseCalloutProps = {
  class?: any
  type?: string
  icon?: string
  to?: string
  target?: string
  color?: CalloutVariants['color']
}

export type CalloutSlots = {
  default(props?: object): any
}
