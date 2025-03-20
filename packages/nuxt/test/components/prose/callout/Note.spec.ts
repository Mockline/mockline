import { describe, it, expect } from 'vitest'
import type {TypeOf} from "zod";
// @ts-ignore
import { MNote } from '#components'
import ComponentRender from "../../../component-render";

describe('Note', () => {
  it.each([
    ['basic case', { props: {} }],
    ['<MNote>Note slot</MNote>'],
    // @ts-expect-error
  ])('renders %s correctly', async (nameOrHtml, options: TypeOf<typeof MNote.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MNote)
    expect(html).toMatchSnapshot()
  })
})

