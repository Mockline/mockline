import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Button from '../../src/runtime/components/Button.vue'

describe('Button', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Button)
    expect(html.html()).toMatchSnapshot()
  })
})
