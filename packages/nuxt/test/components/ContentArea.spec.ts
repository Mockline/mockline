import { describe, it, expect } from 'vitest'
// @ts-ignore
import {MContentArea} from "#components";
import ComponentRender from "../component-render";

describe('ContentArea', () => {
  it.each([
    ['base case', {}],
    ['with margin', { props: { margin: false } }],
    ['without margin', { props: { margin: true } }],
    ['<MContentArea margin>Super Slot</MContentArea>>', { props: { margin: true } }],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MContentArea.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MContentArea)
    expect(html).toMatchSnapshot()
  })
})
