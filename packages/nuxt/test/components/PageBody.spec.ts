import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
//@ts-ignore
import { MPageBody } from '#components';
import ComponentRender from "../component-render";

describe('PageBody', () => {
  it.each([
    ['base case', {}],
    ['<MPageBody class="p-1" />']
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MPageBody.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MPageBody)
    expect(html).toMatchSnapshot()
  })
})
