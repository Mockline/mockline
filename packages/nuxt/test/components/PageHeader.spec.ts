import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import PageHeader from '../../src/runtime/components/PageHeader.vue'

describe('PageHeader', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(PageHeader)
    expect(html.html()).toMatchSnapshot()
  })
})
