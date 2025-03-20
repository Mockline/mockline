import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
import ComponentRender from "../component-render";
// @ts-ignore
import { MMain } from '#components'

describe('Main', () => {
  it.each([
    ['base case', {}]
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MMain.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MMain)
    expect(html).toMatchSnapshot()
  })
})
