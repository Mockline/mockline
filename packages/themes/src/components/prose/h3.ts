import { tv } from 'tailwind-variants'

export const proseH3 = tv({
  base: 'text-xl text-[var(--ui-text-highlighted)] font-bold mt-8 mb-3 scroll-mt-[calc(var(--header-height))] [&>a]:focus-visible:outline-[var(--ui-primary)] [&>a>code]:border-dashed hover:[&>a>code]:border-[var(--ui-primary)] hover:[&>a>code]:text-[var(--ui-primary)] [&>a>code]:text-lg/6 [&>a>code]:font-bold'
})

export type ProseH3Props = {
  id?: string
  class?: any
}
