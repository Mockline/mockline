import type { VariantProps } from 'tailwind-variants'
import { proseCode } from '../../components'

type CodeVariants = VariantProps<typeof proseCode>

export type CodeProps = {
  lang?: string
  color?: CodeVariants['color']
  class?: any
}
