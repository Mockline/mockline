import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Toasts from '../../src/runtime/components/Toasts.vue'

describe('Toasts', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Toasts)
    expect(html.html()).toMatchSnapshot()
  })
})
