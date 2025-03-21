import { describe, it, expect } from 'vitest'
import ComponentRender from '../component-render'
import type { TypeOf } from 'zod'
// @ts-ignore
import { MAvatar } from '#components'

describe('Avatar', () => {
  it.each([
    ['basic case', { }],
    ['icon', { props: { src: "", alt: "test",  icon: 'lucide:image' } }],
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MAvatar.props>) => {
    if (options !== undefined) {
      options.slots = options.slots || { default: () => 'label' }
      options.slots.default = options.slots.default || (() => 'label')
    }
    const html = await ComponentRender(nameOrHtml, options, MAvatar)
    expect(html).toMatchSnapshot()
  })
})
