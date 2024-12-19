import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import P from '../../src/runtime/components/prose/P.vue'

describe('P', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(P)
    expect(html.html()).toMatchSnapshot()
  })
})
