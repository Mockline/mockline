import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ContentFloatingTocLinks from '../../src/runtime/components/content/ContentFloatingToc/ContentFloatingTocLinks.vue'

describe('ContentFloatingTocLinks', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(ContentFloatingTocLinks)
    expect(html.html()).toMatchSnapshot()
  })
})
