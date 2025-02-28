import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MContentToc } from '#components'
import ComponentRender from "../../../component-render";

describe('ContentToc', () => {
  it.each([
    ['basic case', { props: { links: [{id: 'id', text: 'text', depth: 1}] }}],
    ['<MContentToc :links="[{id: \'id\', text: \'text\', depth: 1}]"/>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MContentToc.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MContentToc)
    expect(html).toMatchSnapshot()
  })
})


