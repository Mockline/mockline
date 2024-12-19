import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import CodeIcon from '../../src/runtime/components/prose/CodeIcon.vue'

describe('CodeIcon', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(CodeIcon)
    expect(html.html()).toMatchSnapshot()
  })
})
