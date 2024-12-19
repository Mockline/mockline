import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import SidebarLayout from '../../src/runtime/components/SidebarLayout.vue'

describe('SidebarLayout', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(SidebarLayout)
    expect(html.html()).toMatchSnapshot()
  })
})
