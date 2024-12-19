import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Aside from '../../src/runtime/components/Aside.vue'

describe('Aside', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Aside)
    expect(html.html()).toMatchSnapshot()
  })
})
