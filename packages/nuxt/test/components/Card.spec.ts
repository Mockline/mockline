import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Card from '../../src/runtime/components/Card.vue'

describe('Card', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Card)
    expect(html.html()).toMatchSnapshot()
  })
})
