import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Danger from '../../src/runtime/components/prose/callout/Danger.vue'

describe('Danger', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Danger)
    expect(html.html()).toMatchSnapshot()
  })
})
