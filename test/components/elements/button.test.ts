import { describe, it, expect } from 'vitest'
import Button, { type ButtonProps } from '../../../src/runtime/components/elements/Button.vue'
import ComponentRender from '../component-render'

describe('Button', () => {
  it('renders correctly', async () => {
    const html = await ComponentRender('default', {}, Button)
    expect(html).toMatchSnapshot()
  })
  /*it.each([
    ['with label', { props: { label: 'Button' } }],
    ['with size', { props: { size: 'sm' } }],
  ])('renders %s correctly', async (nameOrHtml: string, options: { props?: ButtonProps, slots?: any }): Promise<void> => {
    const html = await ComponentRender(nameOrHtml, options, Button)
    expect(html).toMatchSnapshot()
  })*/
})
