import { describe, it, expect } from 'vitest'
import ComponentRender from "../component-render";
import type {TypeOf} from "zod";
// @ts-ignore
import {MDivider} from "#components";

describe('Divider', () => {
  it.each([
    ['base case', {}],
    ['horizontal', { props: { orientation: 'horizontal' } }],
    ['with label', { props: { label: 'super label' } }],
    ['with full props', { props: { orientation: 'horizontal', label: 'super label', icon: 'heroicons-check', color: 'black', size: 'md', variant: 'solid' } }],
    ['<MDivider orientation="horizontal" label="Test" />'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MDivider.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MDivider)
    expect(html).toMatchSnapshot()
  })
})
