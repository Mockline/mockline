import { tv } from 'tailwind-variants'

const proseA = tv({
  base: 'text-[var(--ui-primary)] hover:underline focus-visible:outline-[var(--ui-primary)]',
})

export type ProseAProps = {
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined
  class?: any
}

export default proseA
