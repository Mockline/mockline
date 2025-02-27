import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MPageHeader } from '#components'
import ComponentRender from "../component-render";

describe('PageHeader', () => {
  it.each([
    ['base case', {}],
    ['all props', { props: { headline: 'healine', icon: 'heroicons-check', title: 'Title', links: [{ label: 'first', href: '/path/to/first' }], description: 'descr'}}],
    ['<MPageHeader title="titre"></MPageHeader>']
    // @ts-ignore
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MPageHeader.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MPageHeader)
    expect(html).toMatchSnapshot()
  })
})
