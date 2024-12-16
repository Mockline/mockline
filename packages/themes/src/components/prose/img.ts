import { tv } from 'tailwind-variants'

export const proseImg = tv({
  base: 'cursor-zoom-in',
})

export type ProseImgProps = {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  class?: any
}
