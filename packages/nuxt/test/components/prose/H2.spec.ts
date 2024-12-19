import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import H2 from '../../src/runtime/components/prose/H2.vue'

describe('H2', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(H2)
    expect(html.html()).toMatchSnapshot()
  })
})
