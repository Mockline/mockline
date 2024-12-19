import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ThemeToggle from '../../src/runtime/components/ThemeToggle.vue'

describe('ThemeToggle', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(ThemeToggle)
    expect(html.html()).toMatchSnapshot()
  })
})
