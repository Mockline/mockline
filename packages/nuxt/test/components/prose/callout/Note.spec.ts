import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import Note from '../../src/runtime/components/prose/callout/Note.vue'

describe('Note', () => {
  it('can mount component', async () => {
    const html = await renderSuspended(Note)
    expect(html.html()).toMatchSnapshot()
  })
})
