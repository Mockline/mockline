import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Img from '../../src/runtime/components/prose/Img.vue'

describe('Img', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Img)
    expect(html.html()).toMatchSnapshot()
  })
})
