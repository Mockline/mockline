import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Main from '../../src/runtime/components/Main.vue'

describe('Main', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Main)
    expect(html.html()).toMatchSnapshot()
  })
})
