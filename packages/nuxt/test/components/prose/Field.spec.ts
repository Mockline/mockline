import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MField } from '#components'
import type { TypeOf } from "zod";
import ComponentRender from "../../component-render";

describe('CodeIcon', () => {
  const props = {
    name: 'analytics',
    type: 'string',
    required: false,
  }
  it.each([
    ['with name', { props: { name: 'analytics' } }],
    ['with type', { props: { type: 'string' } }],
    ['with required', { props: { required: true } }],
    ['with all props', { props: { ...props } }],
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MField.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MField)
    expect(html).toMatchSnapshot()
  })
})
