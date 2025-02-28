import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MProseIcon } from '#components'
import ComponentRender from "../../component-render";

describe('ProseIcon', () => {
  it.each([
    ['basic case', { props: { name: 'name' } }]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MProseIcon.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MProseIcon)
    expect(html).toMatchSnapshot()
  })
})
