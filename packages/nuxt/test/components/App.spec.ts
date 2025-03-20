import { describe, it, expect } from 'vitest'
import type { TypeOf } from 'zod'
// @ts-ignore
import { MApp } from '#components'
import ComponentRender from '../component-render'

describe('App', () => {
  it.each(
    [
      ['transparent', {}],
      ['<MApp :tooltip="{ delayDuration: 5 }" class="mt-5" transparent>Slot Filled here</MApp>']
      // @ts-expect-error
    ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MApp.props>) => {
      const html = await ComponentRender(nameOrHtml, options, MApp)
      expect(html).toMatchSnapshot()
  })
})
