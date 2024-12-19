import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ProseIcon from '../../src/runtime/components/prose/ProseIcon.vue'

describe('ProseIcon', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(ProseIcon)
    expect(html.html()).toMatchSnapshot()
  })
})
