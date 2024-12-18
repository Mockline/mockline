import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { MButton } from '#components'

describe('Button', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(MButton)
    expect(html.html()).toMatchSnapshot()
  })
})
