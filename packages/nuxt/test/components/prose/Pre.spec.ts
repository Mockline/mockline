import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Pre from '../../src/runtime/components/prose/Pre.vue'

describe('Pre', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Pre)
    expect(html.html()).toMatchSnapshot()
  })
})
