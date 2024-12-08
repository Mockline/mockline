import { tv } from 'tailwind-variants'

const proseA = tv({
  base: 'text-[var(--ui-primary)] border-b border-transparent hover:border-[var(--ui-primary)] font-medium focus-visible:outline-[var(--ui-primary)] [&>code]:border-dashed hover:[&>code]:border-[var(--ui-primary)] hover:[&>code]:text-[var(--ui-primary)]',
})

export type ProseAProps = {
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined
  class?: any
}

export default proseA
