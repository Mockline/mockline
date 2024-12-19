import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ContentTocLinks from '../../src/runtime/components/content/ContentToc/ContentTocLinks.vue'

describe('ContentTocLinks', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(ContentTocLinks)
    expect(html.html()).toMatchSnapshot()
  })
})
