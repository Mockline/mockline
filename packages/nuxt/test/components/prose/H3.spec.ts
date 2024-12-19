import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import H3 from '../../src/runtime/components/prose/H3.vue'

describe('H3', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(H3)
    expect(html.html()).toMatchSnapshot()
  })
})
