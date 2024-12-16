import { tv } from 'tailwind-variants'

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

export type CodeGroupProps = {
  defaultValue?: string
  class?: any
  sync?: string
}
