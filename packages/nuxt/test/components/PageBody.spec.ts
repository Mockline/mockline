import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import PageBody from '../../src/runtime/components/PageBody.vue'

describe('PageBody', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(PageBody)
    expect(html.html()).toMatchSnapshot()
  })
})
