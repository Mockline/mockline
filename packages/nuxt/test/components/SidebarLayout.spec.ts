import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MSidebarLayout } from '#components'
import ComponentRender from "../component-render";

describe('SidebarLayout', () => {
  it.each([
    ['base case', {}],
    ['sizes', { props: { minSize: 10, maxSize: 10, collapsedSize: 1, defaultSize: 10 } }],
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MSidebarLayout.props>) => {
    if (options != null) {
      options.slots = { default: 'default' }
      options.slots.default =  () => 'default'
    }
    const html = await ComponentRender(nameOrHtml, options, MSidebarLayout)
    expect(html).toMatchSnapshot()
  })
})
