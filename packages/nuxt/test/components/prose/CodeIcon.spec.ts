import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MCodeIcon } from '#components'
import type { TypeOf } from "zod";
import ComponentRender from "../../component-render";

describe('CodeIcon', () => {
  it.each([
    ['basic case', {}],
    ['with filename', { props: { filename: './filename.txt' }}],
    ['with icon', { props: { icon: 'heroicons-check' }}],
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MCodeIcon.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MCodeIcon)
    expect(html).toMatchSnapshot()
  })
})
