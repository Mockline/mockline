import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MH4 } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('H4', () => {
  it.each([
    ['basic case', {}]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MH4.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MH4)
    expect(html).toMatchSnapshot()
  })
})
