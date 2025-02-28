import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MContentFloatingToc } from '#components'
import ComponentRender from "../../../component-render";

describe('ContentFloatingToc', () => {
  it.each([
    ['basic case', { props: { links: [{id: 'id', text: 'text', depth: 1}] }}],
    ['<MContentFloatingToc :links="[{id: \'id\', text: \'text\', depth: 1}]"/>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MContentFloatingToc.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MContentFloatingToc)
    expect(html).toMatchSnapshot()
  })
})


