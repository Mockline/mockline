import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MH2 } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('H2', () => {
  it.each([
    ['basic case', {}]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MH2.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MH2)
    expect(html).toMatchSnapshot()
  })
})
