import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Header from '../../src/runtime/components/Header.vue'

describe('Header', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Header)
    expect(html.html()).toMatchSnapshot()
  })
})
