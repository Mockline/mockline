import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MOl } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('Ol', () => {
  it.each([
    ['basic case', {}],
    ['<MOl><li>li</li></MOl>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MOl.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MOl)
    expect(html).toMatchSnapshot()
  })
})
