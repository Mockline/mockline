import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Index from '../../src/runtime/components/content/ContentToc/Index.vue'

describe('Index', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Index)
    expect(html.html()).toMatchSnapshot()
  })
})
