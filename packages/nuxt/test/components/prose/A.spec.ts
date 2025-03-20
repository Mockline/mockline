import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MA } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('ProseA', () => {
  it.each([
    ['basic case', {}]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MA.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MA)
    expect(html).toMatchSnapshot()
  })
})
