import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import H4 from '../../src/runtime/components/prose/H4.vue'

describe('H4', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(H4)
    expect(html.html()).toMatchSnapshot()
  })
})
