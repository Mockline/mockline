import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import CodeGroup from '../../src/runtime/components/prose/CodeGroup.vue'

describe('CodeGroup', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(CodeGroup)
    expect(html.html()).toMatchSnapshot()
  })
})
