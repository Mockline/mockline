import { tv } from 'tailwind-variants'

export const proseH4 = tv({
  base: 'text-lg text-[var(--ui-text-highlighted)] scroll-mt-[calc(var(--header-height)*1.5)]',
})

export type ProseH4Props = {
  id?: string
  class?: any
}
