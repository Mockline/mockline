import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import A from '../../src/runtime/components/prose/A.vue'

describe('A', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(A)
    expect(html.html()).toMatchSnapshot()
  })
})
