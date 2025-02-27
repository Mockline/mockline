import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import {MCard} from "#components";
import ComponentRender from "../component-render";

describe('Card', () => {
  it.each([
    ['base case', {}]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MCard.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MCard)
    expect(html).toMatchSnapshot()
  })
})
