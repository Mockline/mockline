import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Divider from '../../src/runtime/components/Divider.vue'

describe('Divider', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Divider)
    expect(html.html()).toMatchSnapshot()
  })
})
