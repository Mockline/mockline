import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Preview from '../../src/runtime/components/Preview.vue'

describe('Preview', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Preview)
    expect(html.html()).toMatchSnapshot()
  })
})
