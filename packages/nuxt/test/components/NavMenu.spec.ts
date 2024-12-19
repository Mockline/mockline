import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import NavMenu from '../../src/runtime/components/NavMenu.vue'

describe('NavMenu', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(NavMenu)
    expect(html.html()).toMatchSnapshot()
  })
})
