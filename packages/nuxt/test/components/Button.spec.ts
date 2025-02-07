import { describe, it, expect } from 'vitest'
import ComponentRender from '../component-render'
import { MButton } from '#components'

describe('Button', () => {
  it.each([
    ['basic case', { }],
    ['leading icon', { props: { leading: true, icon: 'heroicons-check' } }],
    ['black solid', { props: { color: 'black', variant: 'solid' } }],
    ['rounded full', { props: { ui: { rounded: 'rounded-full' } } }],
    ['<UButton icon="i-heroicons-pencil-square" size="sm" color="primary" square variant="solid" />']
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof UButton.props>) => {
    if (options !== undefined) {
      options.slots = options.slots || { default: () => 'label' }
      options.slots.default = options.slots.default || (() => 'label')
    }
    const html = await ComponentRender(nameOrHtml, options, MButton)
    expect(html).toMatchSnapshot()
  })
})
