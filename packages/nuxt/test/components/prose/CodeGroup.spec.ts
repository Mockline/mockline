import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MCodeGroup } from '#components'
import type { TypeOf } from "zod";
import ComponentRender from "../../component-render";

describe('CodeGroup', () => {
  it.each([
    ['basic case', {}],
    ['with defaultValue', { props: { defaultValue: 'typescript' }}],
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MCodeGroup.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MCodeGroup)
    expect(html).toMatchSnapshot()
  })
})
