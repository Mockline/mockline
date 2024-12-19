import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Warning from '../../src/runtime/components/prose/callout/Warning.vue'

describe('Warning', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Warning)
    expect(html.html()).toMatchSnapshot()
  })
})
