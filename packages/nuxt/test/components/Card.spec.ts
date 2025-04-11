import { describe, it, expect } from 'vitest'
import type { TypeOf } from "zod";
// @ts-ignore
import { MCard } from "#components";
import ComponentRender from "../component-render";

describe('Card', () => {
  it.each([
    ['base case (outline by default)', {}],
    ['with outline variant', { variant: 'outline' }],
    ['with soft variant', { variant: 'soft' }],
    ['with subtle variant', { variant: 'subtle' }],
    ['with custom class', { class: 'custom-class' }]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MCard.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MCard)
    expect(html).toMatchSnapshot()
  })
})
