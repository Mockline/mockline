import { tv } from 'tailwind-variants'

export const proseH1 = tv({
  base: 'text-4xl font-bold mb-8 scroll-mt-[var(--ui-header-height)]'
})

export const proseH2 = tv({
  base: 'text-2xl font-bold mt-12 mb-6 scroll-mt-[calc(var(--header-height))] [&>a]:focus-visible:outline-[var(--ui-primary)] [&>a>code]:border-dashed hover:[&>a>code]:border-[var(--ui-primary)] hover:[&>a>code]:text-[var(--ui-primary)] [&>a>code]:text-xl/7 [&>a>code]:font-bold'
})

export const proseH3 = tv({
  base: 'text-xl  font-bold mt-8 mb-3 scroll-mt-[calc(var(--header-height))] [&>a]:focus-visible:outline-[var(--ui-primary)] [&>a>code]:border-dashed hover:[&>a>code]:border-[var(--ui-primary)] hover:[&>a>code]:text-[var(--ui-primary)] [&>a>code]:text-lg/6 [&>a>code]:font-bold'
})

export const proseH4 = tv({
  base: 'text-lg scroll-mt-[calc(var(--header-height)*1.5)]',
})

export const proseP = tv({
  base: 'my-5 leading-7'
})

export const proseA = tv({
  base: 'text-[var(--ui-primary)] border-b border-transparent hover:border-[var(--ui-primary)] font-medium focus-visible:outline-[var(--ui-primary)] [&>code]:border-dashed hover:[&>code]:border-[var(--ui-primary)] hover:[&>code]:text-[var(--ui-primary)]',
})

export type ProseH1Props = {
  id?: string
  class?: any
}

export type ProseH2Props = {
  id?: string
  class?: any
}

export type ProseH3Props = {
  id?: string
  class?: any
}

export type ProseH4Props = {
  id?: string
  class?: any
}

export type ProsePProps = {
  class?: any
}

export type ProseAProps = {
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined
  class?: any
}
