import { describe, it, expect } from 'vitest'
import type { TypeOf } from 'zod'
import ComponentRender from '../component-render'
import { Button } from '#components'

describe('Button', () => {
  it.each([
    ['basic case', { }],
    ['black solid', { props: { color: 'black', variant: 'solid' } }],
    ['rounded full', { props: { ui: { rounded: 'rounded-full' } } }],
    ['<Button icon="i-heroicons-pencil-square" size="sm" color="primary" square variant="solid" />']
    // @ts-ignore
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof Button.props>) => {
    if (options !== undefined) {
      options.slots = options.slots || { default: () => 'label' }
      options.slots.default = options.slots.default || (() => 'label')
    }
    const html = await ComponentRender(nameOrHtml, options, Button)
    expect(html).toMatchSnapshot()
  })
})
