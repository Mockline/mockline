import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MHeader } from '#components'
import ComponentRender from "../component-render";

describe('Header', () => {
  it.each([
    ['base case', {}],
    ['sticky', { props: { sticky: true}}],
    ['transparent', { props: { transparent: true }}],
    ['<MHeader><template #left>left</template><template #default>default</template><template #right>right</template></MHeader>>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MHeader.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MHeader)
    expect(html).toMatchSnapshot()
  })
})
