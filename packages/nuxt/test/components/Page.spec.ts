import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
import ComponentRender from "../component-render";
// @ts-ignore
import { MPage } from "#components";

describe('Page', () => {
  it.each([
    ['base case', {}],
    ['wrapper', { props: { wrapper: 'relative' } }],
    ['left', { props: { left: 'relative' } }],
    ['right', { props: { right: 'relative' } }],
    ['<MPage><template #left>left</template><template #default>default</template><template #right>right</template></MPage>>']
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MPage.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MPage)
    expect(html).toMatchSnapshot()
  })
})
