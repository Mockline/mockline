import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Li from '../../src/runtime/components/prose/Li.vue'

describe('Li', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Li)
    expect(html.html()).toMatchSnapshot()
  })
})
