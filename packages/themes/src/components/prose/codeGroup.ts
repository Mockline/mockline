import { tv } from 'tailwind-variants'

const proseCodeGroup = tv({
  slots: {
    root: 'relative group [&>div:not(:first-child)]:!my-0 [&>div:not(:first-child)]:!static my-5',
    list: 'relative flex items-center gap-1 border border-[var(--ui-border-muted)] bg-[var(--ui-bg)] border-b-0 rounded-t-[calc(var(--ui-radius)*1.5)] overflow-x-auto p-2',
    indicator: 'absolute left-0 inset-y-2 w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)] transition-[translate,width] duration-200 bg-[var(--ui-bg-elevated)] rounded-[calc(var(--ui-radius)*1.5)] shadow-xs',
    trigger: ['relative inline-flex items-center gap-1.5 text-[var(--ui-text)] data-[state=active]:text-[var(--ui-text-highlighted)] hover:bg-[var(--ui-bg-elevated)]/50 px-2 py-1.5 text-sm rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)] focus:outline-none'],
    triggerIcon: 'size-4 shrink-0',
    triggerLabel: 'truncate'
  }
})

export type CodeGroupProps = {
  defaultValue?: string
  class?: any
  sync?: string
}

export default proseCodeGroup
