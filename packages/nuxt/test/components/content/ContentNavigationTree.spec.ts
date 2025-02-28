import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MContentNavigationTree } from '#components'
import ComponentRender from "../../component-render";

describe('ContentNavigationTree', () => {
  it.each([
    ['basic case', { props: { links: [{ title: 'title', path: '/path' }] } }],
    ['<MContentNavigationTree :links="[{ title: \'title\', path: \'/path\' }]">ContentNavigationTree slot</MContentNavigationTree>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MContentNavigationTree.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MContentNavigationTree)
    expect(html).toMatchSnapshot()
  })
})


