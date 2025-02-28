import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MPre } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('Pre', () => {
  it.each([
    ['basic case', {}],
    ['full props', { props: { icon: 'heroicons-check', code: '// comment', language: 'typescript'} }],
    ['<MPre />'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MPre.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MPre)
    expect(html).toMatchSnapshot()
  })
})

