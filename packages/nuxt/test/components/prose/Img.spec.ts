import { describe, it, expect } from 'vitest'
// @ts-ignore
import { MImg } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from "../../component-render";

describe('Img', () => {
  it.each([
    ['basic case', { props: { src: './src-file.img' }}],
    ['with alt', { props: { src: './src-file.img', alt: 'alt for image' } }]
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MImg.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MImg)
    expect(html).toMatchSnapshot()
  })
})
