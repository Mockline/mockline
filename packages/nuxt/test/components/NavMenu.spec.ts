import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
import ComponentRender from "../component-render";
// @ts-ignore
import { MNavMenu } from '#components'

describe('NavMenu', () => {
  it.each([
    ['base case', { props: { items: [{ title: 'Menu1', path: '/path/to/menu1' }] }}],
    ['horizontal', { props: { orientation: 'horizontal', items: [{ title: 'Menu1', path: '/path/to/menu1' }] } }],
    ['vertical', { props: { orientation: 'vertical', items: [{ title: 'Menu1', path: '/path/to/menu1' }] } }],
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MNavMenu.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MNavMenu)
    expect(html).toMatchSnapshot()
  })
})
