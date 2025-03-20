import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MBlur } from '#components'
import ComponentRender from "../component-render";

describe('Blur', () => {
  it.each([
    ['top', { props: { position: 'top', size: 12 }}],
    ['bottom', { props: { position: 'bottom', size: 12 }}],
    ['both', { props: { position: 'both', size: 12 }}],
    ['<MBlur position="top" />'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MBlur.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MBlur)
    expect(html).toMatchSnapshot()
  })
})
