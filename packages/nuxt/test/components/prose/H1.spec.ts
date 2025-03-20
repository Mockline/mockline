import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MH1 } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('H1', () => {
  it.each([
    ['basic case', {}]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MH1.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MH1)
    expect(html).toMatchSnapshot()
  })
})
