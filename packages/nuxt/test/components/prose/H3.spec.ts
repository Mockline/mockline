import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MH3 } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('H3', () => {
  it.each([
    ['basic case', {}]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MH3.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MH3)
    expect(html).toMatchSnapshot()
  })
})
