import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Hr from '../../src/runtime/components/prose/Hr.vue'

describe('Hr', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Hr)
    expect(html.html()).toMatchSnapshot()
  })
})
