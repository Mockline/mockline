import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MFieldGroup } from '#components'
import type { TypeOf } from "zod";
import ComponentRender from "../../component-render";

describe('CodeIcon', () => {
  /*const props = [
    {
      name: 'analytics',
      type: 'string',
      required: true,
    },
    {
      name: 'blob',
      type: 'string',
      required: false,
    }
  ]*/
  it.each([
    ['with name', { props: { name: 'analytics' } }],
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MFieldGroup.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MFieldGroup)
    expect(html).toMatchSnapshot()
  })
})
