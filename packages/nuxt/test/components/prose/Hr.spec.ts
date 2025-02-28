import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MHr } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('Hr', () => {
  it.each([
    ['basic case', {}]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MHr.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MHr)
    expect(html).toMatchSnapshot()
  })
})
