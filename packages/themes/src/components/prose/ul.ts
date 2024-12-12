import { tv } from 'tailwind-variants'

export const proseUl = tv({
  base: 'list-disc pl-6 my-5 marker:text-[var(--ui-border-accented)]'
})

export type ProseUlProps = {
  class?: any
}
