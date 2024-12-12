import { tv } from 'tailwind-variants'

export const proseCallout = tv({
  slots: {
    base: 'rounded-md bg-neutral-100 p-4 text-gray-900 dark:border-gray-800 dark:border-opacity-25 dark:bg-neutral-950 dark:text-white dark:shadow-md',
    icon: 'text-2xl',
  }
})

export type ProseCalloutProps = {
  class?: any
  type?: string
  icon?: string,
  to?: string,
}

export default proseCallout
