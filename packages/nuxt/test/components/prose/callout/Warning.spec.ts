import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MWarning } from '#components'
import ComponentRender from "../../../component-render";

describe('Warning', () => {
  it.each([
    ['basic case', { props: {} }],
    ['<MWarning>Warning slot</MWarning>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MWarning.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MWarning)
    expect(html).toMatchSnapshot()
  })
})

