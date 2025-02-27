import { describe, it, expect } from 'vitest'
import ComponentRender from '../component-render'
import type { TypeOf } from 'zod'
// @ts-ignore
import { MButton } from '#components'

describe('Button', () => {
  it.each([
    ['basic case', { }],
    ['leading icon', { props: { leading: true, icon: 'heroicons-check' } }],
    ['black solid', { props: { color: 'black', variant: 'solid' } }],
    ['rounded full', { props: { rounded: 'base' } }],
    ['<MButton icon="i-heroicons-pencil-square" size="sm" color="primary" square variant="solid" />']
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MButton.props>) => {
    if (options !== undefined) {
      options.slots = options.slots || { default: () => 'label' }
      options.slots.default = options.slots.default || (() => 'label')
    }
    const html = await ComponentRender(nameOrHtml, options, MButton)
    expect(html).toMatchSnapshot()
  })
})
