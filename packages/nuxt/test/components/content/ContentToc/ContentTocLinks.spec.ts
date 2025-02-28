import { describe, it, expect, beforeEach, vi } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MContentTocLinks } from '#components'
import ComponentRender from "../../../component-render";

describe('ContentTocLinks', () => {
  beforeEach(() => {
    vi.mock('vue-router', () => ({
      'useRouter': () => ({
        push: (_: string) => null
      })
    }))
  })
  it.each([
    ['basic case', { props: { links: [{id: 'id', text: 'text', depth: 1}], activeHeadings: ['id'] }}],
    ['<MContentTocLinks :links="[{id: \'id\', text: \'text\', depth: 1}]" :activeHeadings="[\'id\']" />'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MContentTocLinks.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MContentTocLinks)
    expect(html).toMatchSnapshot()
  })
})


