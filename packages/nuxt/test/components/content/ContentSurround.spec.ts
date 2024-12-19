import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ContentSurround from '../../src/runtime/components/content/ContentSurround.vue'

describe('ContentSurround', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(ContentSurround)
    expect(html.html()).toMatchSnapshot()
  })
})
