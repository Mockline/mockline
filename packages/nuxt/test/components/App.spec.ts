import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import App from '../../src/runtime/components/App.vue'

describe('App', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(App)
    expect(html.html()).toMatchSnapshot()
  })
})
