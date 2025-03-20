import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MCallout } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('ProseCallout', () => {
  it.each([
    ['basic case', {}],
    ['with link', { props: { to: '/', target: '_blank' } }],
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MCallout.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MCallout)
    expect(html).toMatchSnapshot()
  })
})
