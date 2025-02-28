import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MCode } from '#components'
import type { TypeOf } from "zod";
import ComponentRender from "../../component-render";

describe('Code', () => {
  it.each([
    ['basic case', {}],
    ['with lang', { props: { lang: 'typescript' }}],
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MCode.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MCode)
    expect(html).toMatchSnapshot()
  })
})
