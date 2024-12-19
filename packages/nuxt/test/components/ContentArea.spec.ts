import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ContentArea from '../../src/runtime/components/ContentArea.vue'

describe('ContentArea', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(ContentArea)
    expect(html.html()).toMatchSnapshot()
  })
})
