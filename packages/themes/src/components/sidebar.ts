import { tv } from 'tailwind-variants'

export const sidebar = tv({
  slots: {
    root: 'flex flex-col h-full justify-between px-3 py-2'
  }
})

export type SidebarProps = {
  class?: string
  minSize?: number
  maxSize?: number
  collapsedSize?: number
  defaultSize?: number
}

export type SidebarSlots = {
  header: any
  default: any
  footer: any
}
