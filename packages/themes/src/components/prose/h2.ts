import { tv } from 'tailwind-variants'

const proseH2 = tv({
  base: 'text-2xl text-[var(--ui-text-highlighted)] font-bold mt-12 mb-6 scroll-mt-[calc(var(--header-height))] [&>a]:focus-visible:outline-[var(--ui-primary)] [&>a>code]:border-dashed hover:[&>a>code]:border-[var(--ui-primary)] hover:[&>a>code]:text-[var(--ui-primary)] [&>a>code]:text-xl/7 [&>a>code]:font-bold'
})

export type ProseH2Props = {
  id?: string
  class?: any
}

export default proseH2
