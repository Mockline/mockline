import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Blur from '../../src/runtime/components/Blur.vue'

describe('Blur', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Blur)
    expect(html.html()).toMatchSnapshot()
  })
})
