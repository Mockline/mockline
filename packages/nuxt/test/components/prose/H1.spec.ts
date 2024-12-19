import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import H1 from '../../src/runtime/components/prose/H1.vue'

describe('H1', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(H1)
    expect(html.html()).toMatchSnapshot()
  })
})
