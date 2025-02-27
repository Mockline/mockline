import { describe, it, expect } from 'vitest';
import ComponentRender from "../component-render"
import type { TypeOf } from 'zod'
// @ts-ignore
import { MSwitch } from '#components'

describe('Switch', () => {
  it.each([
    ['base case', {}],
  ])('renders %s correctly', async (nameOrHtml: string, options?: TypeOf<typeof MSwitch.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MSwitch)
    expect(html).toMatchSnapshot()
  })
})
