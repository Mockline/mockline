import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Code from '../../src/runtime/components/prose/Code.vue'

describe('Code', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Code)
    expect(html.html()).toMatchSnapshot()
  })
})
