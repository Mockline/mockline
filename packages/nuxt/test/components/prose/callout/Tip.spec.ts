import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MTip } from '#components'
import ComponentRender from "../../../component-render";

describe('Tip', () => {
  it.each([
    ['basic case', { props: {} }],
    ['<MTip>Tip slot</MTip>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MTip.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MTip)
    expect(html).toMatchSnapshot()
  })
})

