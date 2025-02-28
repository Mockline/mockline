import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MContentSurround } from '#components'
import ComponentRender from "../../component-render";

describe('ContentSurround', () => {
  it.each([
    ['basic case', { props: { surround: [{title: 'title', path: 'path'}]}}],
    ['<MContentSurround>ContentSurround slot</MContentSurround>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MContentSurround.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MContentSurround)
    expect(html).toMatchSnapshot()
  })
})


