import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MP } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('P', () => {
  it.each([
    ['basic case', {}],
    ['<MP>paragraph</MP>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MP.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MP)
    expect(html).toMatchSnapshot()
  })
})
