import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MSidebar } from '#components'
import ComponentRender from "../component-render";

describe('Sidebar', () => {
  it.each([
    ['base case', {}],
    ['sizes', { props: { minSize: 10, maxSize: 10, collapsedSize: 1, defaultSize: 10 } }],
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MSidebar.props>) => {
    if (options != null) {
      options.slots = { header: 'header', default: 'default', footer: 'footer' }
      options.slots.header = () => 'header'
      options.slots.default =  () => 'default'
      options.slots.footer = () => 'footer'
    }
    const html = await ComponentRender(nameOrHtml, options, MSidebar)
    expect(html).toMatchSnapshot()
  })
})
