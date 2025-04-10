import { tv } from 'tailwind-variants'

export const proseFieldGroup = tv({
  base: 'my-5 divide-y divide-(--color-border-primary) *:not-last:pb-5',
})

export type FieldGroupProps = {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}
