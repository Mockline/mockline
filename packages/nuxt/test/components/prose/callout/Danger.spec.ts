import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MDanger } from '#components'
import ComponentRender from "../../../component-render";

describe('Danger', () => {
  it.each([
    ['basic case', { props: {} }],
    ['<MDanger>Danger slot</MDanger>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MDanger.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MDanger)
    expect(html).toMatchSnapshot()
  })
})
