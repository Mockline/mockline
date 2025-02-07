import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Page from '../../src/runtime/components/Page.vue'

describe('Page', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Page)
    expect(html.html()).toMatchSnapshot()
  })
})
