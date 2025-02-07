import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Tip from '../../src/runtime/components/prose/callout/Tip.vue'

describe('Tip', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Tip)
    expect(html.html()).toMatchSnapshot()
  })
})
