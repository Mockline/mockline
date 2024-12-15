import { tv } from 'tailwind-variants'

export const proseOl = tv({
  base: 'list-decimal pl-6 my-5'
})

export const proseUl = tv({
  base: 'list-disc pl-6 my-5 marker:text-[var(--ui-border-accented)]'
})

export const proseLi = tv({
  base: 'my-1.5 ps-1.5 leading-7 [&>ul]:my-0'
})

export type ProseOlProps = {
  class?: any
}

export type ProseUlProps = {
  class?: any
}

export type ProseLiProps = {
  class?: any
}
