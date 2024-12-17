import { tv } from 'tailwind-variants'

export const prosePre = tv({
  slots: {
    root: 'dark relative my-5 group not-[.code-group_&]:bg-neutral-950 not-[.code-group_&]:border not-[.code-group_&]:border-neutral-800 not-[.code-group_&]:rounded-base not-[.code-group_&]:p-2',
    header: 'flex items-center gap-1.5 relative pr-1 pb-1 pl-1',
    filename: 'text-[var(--ui-text)] text-sm/6',
    icon: 'size-4 shrink-0',
    copy: 'absolute top-[11px] right-[11px] opacity-0 group-hover:opacity-100 transition',
    base: 'group font-mono text-sm/6 p-1 rounded-base whitespace-pre-wrap break-words overflow-x-auto'
  },
  variants: {
    filename: {
      true: {
        root: '[&>pre]:my-0 my-5',
        base: 'border border-neutral-800/70 bg-neutral-900/70 px-4 py-3'
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
