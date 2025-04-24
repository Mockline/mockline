import { tv } from 'tailwind-variants'

export const proseCodePreview = tv({
  slots: {
    root: '',
    preview: 'flex justify-center border border-(--color-bg-quaternary) relative p-4 rounded-md',
    code: '*:rounded-t-none [&>div]:my-0'
  },
  variants: {
    code: {
      true: {
        preview: 'border-b-0 rounded-b-none'
      }
    }
  }
})

export type ProseCodePreviewProps = {
  class?: any
}

export type ProseCodePreviewSlots = {
  default(props?: object): any
  code(props?: object): any
}
