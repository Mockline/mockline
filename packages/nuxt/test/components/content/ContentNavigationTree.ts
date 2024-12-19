import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ContentNavigationTree from '../../src/runtime/components/content/ContentNavigationTree.vue'

describe('ContentNavigationTree', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(ContentNavigationTree)
    expect(html.html()).toMatchSnapshot()
  })
})
