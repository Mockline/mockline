import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MUl } from '#components'
import ComponentRender from "../../component-render";

describe('Ul', () => {
  it.each([
    ['basic case', {}],
    ['<MUl><li>li</li></MUl>']
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MUl.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MUl)
    expect(html).toMatchSnapshot()
  })
})
