import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MAside } from '#components'
import ComponentRender from "../component-render";

describe('Aside', () => {
  it.each([
    ['sticky', { props: { sticky: true } }],
    ['not sticky', { props: { sticky: false } }],
    ['<MAside class="text-red-500" sticky><template #default>default</template><template #bottom>bottom</template></MAside>']
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MAside.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MAside)
    expect(html).toMatchSnapshot()
  })
})
