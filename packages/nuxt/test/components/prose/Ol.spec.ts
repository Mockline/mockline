import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Ol from '../../src/runtime/components/prose/Ol.vue'

describe('Ol', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Ol)
    expect(html.html()).toMatchSnapshot()
  })
})
