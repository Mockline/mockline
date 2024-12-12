import { tv } from 'tailwind-variants'

export const proseLi = tv({
  base: 'my-1.5 ps-1.5 leading-7 [&>ul]:my-0'
})

export type ProseLiProps = {
  class?: any
}

export default proseLi
