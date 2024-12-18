import { tv } from 'tailwind-variants'

export const proseCode = tv({
  base: [
    'px-1.5 py-0.5 text-sm font-mono font-medium rounded-base inline-block',
    'border border-[var(--color-border-primary)] text-[var(--color-text-primary)] bg-[var(--color-bg-level-2)]'
  ]
})

export const proseCodeGroup = tv({
  slots: {
    root: 'pb-2 px-2 code-group relative group [&>div:not(:first-child)]:!my-0 [&>div:not(:first-child)]:!static my-5 rounded-base border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)]',
    list: 'relative flex items-center gap-1 overflow-x-auto py-2',
    indicator: 'absolute left-0 inset-y-2 w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)] transition-[translate,width] duration-200 border border-[var(--color-border-secondary)] bg-[var(--color-bg-level-2)] rounded-base shadow-xs',
    trigger: 'relative inline-flex items-center gap-1.5 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-translucent)] px-2 py-1.5 text-sm rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-accent)] focus:outline-none',
    triggerIcon: 'size-4 shrink-0',
    triggerLabel: 'truncate'
  },
  variants: {
    forceDark: {
      true: {
        root: 'dark'
      }
    }
  },
  defaultVariants: {
    forceDark: true
  }
})

export const prosePre = tv({
  slots: {
    root: 'relative my-5 group not-[.code-group_&]:bg-[var(--color-bg-primary)] not-[.code-group_&]:border not-[.code-group_&]:border-[var(--color-border-primary)] not-[.code-group_&]:rounded-base not-[.code-group_&]:p-2',
    base: 'group font-mono text-sm/6 p-1 rounded-base whitespace-pre-wrap break-words overflow-x-auto',
    header: 'flex items-center gap-1.5 relative pr-1 pb-1 pl-1',
    filename: 'text-[var(--color-text-primary)] text-sm/6',
    icon: 'size-4 shrink-0',
    copy: 'absolute top-[11px] right-[11px] opacity-0 group-hover:opacity-100 transition'
  },
  variants: {
    filename: {
      true: {
        root: '[&>pre]:my-0 my-5',
        base: 'border border-[var(--color-border-secondary)]/70 bg-[var(--color-bg-level-1)] px-4 py-3'
      }
    },
    forceDark: {
      true: {
        root: 'dark'
      }
    },
    transparent: {
      true: {
        root: 'not-[.code-group_&]:bg-transparent not-[.code-group_&]:border-none not-[.code-group_&]:rounded-none not-[.code-group_&]:p-0',
        base: 'bg-transparent border-none p-0'
      }
    }
  },
  defaultVariants: {
    forceDark: true
  }
})

// type CodeVariants = VariantProps<typeof proseCode>

export type CodeProps = {
  lang?: string
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
  forceDark?: boolean
  transparent?: boolean
  meta?: string
  class?: any
}
