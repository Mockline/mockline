import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MLi } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('Li', () => {
  it.each([
    ['basic case', {}],
    ['<MLi>with slots</MLi>']
    // @ts-ignore
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MLi.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MLi)
    expect(html).toMatchSnapshot()
  })
})
