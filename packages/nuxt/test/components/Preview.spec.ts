import { describe, it, expect } from "vitest";
import type {TypeOf} from "zod";
// @ts-ignore
import { MPreview } from "#components"
import ComponentRender from "../component-render";

describe('Preview', () => {
  it.each([
    ['base case', {}],
    ['<Preview>Slot</Preview>']
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MPreview.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MPreview)
    expect(html).toMatchSnapshot()
  })
})
