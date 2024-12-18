import { tv } from 'tailwind-variants'

export const contentArea = tv({
  slots: {
    root: 'h-[100vh] overflow-y-auto relative rounded-[calc(var(--radius-base)*2)] bg-content-area border border-content-area-border'
  },
  variants: {
    margin: {
      true: '',
    }
  },
  compoundVariants: [
    {
      margin: true,
      class: {
        root: 'h-[calc(100vh-var(--spacing)*2)] m-1'
      }
    }
  ],
})

export type ContentAreaProps = {
  /**
   * Class to override styles
   */
  class?: string,
  /**
   * Add margin to the content area
   */
  margin?: boolean,
}
