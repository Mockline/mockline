import { tv, type VariantProps } from 'tailwind-variants'

export const proseCode = tv({
  base: 'px-1.5 py-0.5 text-sm font-mono font-medium rounded-base inline-block',
  variants: {
    color: {
      neutral: 'border border-[var(--ui-border-muted)] text-[var(--ui-text-highlighted)] bg-[var(--ui-bg-muted)]'
    }
  },
  defaultVariants: {
    color: 'neutral'
  }
})

export const proseCodeGroup = tv({
  slots: {
    root: 'dark pb-2 px-2 code-group relative group [&>div:not(:first-child)]:!my-0 [&>div:not(:first-child)]:!static my-5 rounded-base border border-neutral-800 bg-neutral-950',
    list: 'relative flex items-center gap-1 overflow-x-auto py-2',
    indicator: 'absolute left-0 inset-y-2 w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)] transition-[translate,width] duration-200 border border-neutral-800 bg-neutral-900 rounded-base shadow-xs',
    trigger: 'relative inline-flex items-center gap-1.5 text-white hover:bg-[var(--ui-bg-elevated)]/50 px-2 py-1.5 text-sm rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)] focus:outline-none',
    triggerIcon: 'size-4 shrink-0',
    triggerLabel: 'truncate'
  }
})

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

type CodeVariants = VariantProps<typeof proseCode>

export type CodeProps = {
  lang?: string
  color?: CodeVariants['color']
  class?: any
}

export type CodeGroupProps = {
  defaultValue?: string
  class?: any
  sync?: string
}

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
