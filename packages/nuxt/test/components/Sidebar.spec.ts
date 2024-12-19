import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Sidebar from '../../src/runtime/components/Sidebar.vue'

describe('Sidebar', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Sidebar)
    expect(html.html()).toMatchSnapshot()
  })
})
