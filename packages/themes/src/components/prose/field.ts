import { tv } from 'tailwind-variants'

export const proseField = tv({
  slots: {
    root: 'my-5',
    container: 'flex items-center gap-3 font-mono text-sm',
    name: 'font-semibold text-(--color-accent)',
    wrapper: 'flex-1 flex items-center gap-1.5 text-xs',
    required: 'rounded-(--base-radius) bg-(--color-danger)/10 text-(--color-danger) px-1.5 py-0.5',
    type: 'rounded-(--base-radius) bg-(--color-bg-tertiary) text-(--color-text-tertiary) px-1.5 py-0.5',
    description: 'mt-3 text-(--color-text-tertiary) text-sm [&_code]:text-xs/4'
  }
})

export type FieldProps = {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * The name of the field.
   */
  name: string
  /**
   * Expected type of the field’s value
   */
  type: string
  /**
   * Description of the field
   */
  description?: string
  /**
   * Indicate whether the field is required
   */
  required?: boolean
  class?: any
}

export type FieldSlots = {
  default: any
}
