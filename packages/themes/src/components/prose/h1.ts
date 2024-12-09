import { tv } from 'tailwind-variants'

export const proseH1 = tv({
  base: 'text-4xl text-[var(--ui-text-highlighted)] font-bold mb-8 scroll-mt-[var(--ui-header-height)]'
})

export type ProseH1Props = {
  id?: string
  class?: any
}

export default proseH1
