import { tv } from 'tailwind-variants'

const prosePre = tv({
  slots: {
    root: 'relative my-5 group',
    header: 'flex items-center gap-1.5 border border-[var(--ui-border-muted)] bg-[var(--ui-bg)] border-b-0 relative rounded-t-[calc(var(--ui-radius)*1.5)] px-4 py-3',
    filename: 'text-[var(--ui-text)] text-sm/6',
    icon: 'size-4 shrink-0',
    copy: 'absolute top-[11px] right-[11px] opacity-0 group-hover:opacity-100 transition',
    base: 'group font-mono text-sm/6 border border-[var(--ui-border-muted)] bg-[var(--ui-bg-muted)] rounded-[calc(var(--ui-radius)*1.5)] px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto'
  },
  variants: {
    filename: {
      true: {
        root: '[&>pre]:rounded-t-none [&>pre]:my-0 my-5'
      }
    }
  }
})

export type ProsePreProps = {
  icon?: string
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  hideHeader?: boolean
  meta?: string
  class?: any
}

export default prosePre
