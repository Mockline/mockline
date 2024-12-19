import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Ul from '../../src/runtime/components/prose/Ul.vue'

describe('Ul', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Ul)
    expect(html.html()).toMatchSnapshot()
  })
})
