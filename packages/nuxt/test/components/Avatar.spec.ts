import { describe, it, expect } from 'vitest'
import ComponentRender from '../component-render'
import type { TypeOf } from 'zod'
// @ts-ignore
import { MAvatar } from '#components'

describe('Avatar', () => {
  it.each([
    ['basic case with src', {
      props: {
        src: "https://avatars.githubusercontent.com/u/72015679?v=4",
        alt: "Avatar"
      }
    }],
    ['with fallback initials', {
      props: {
        src: "",
        alt: "Johann Cavallucci"
      }
    }],
    ['with icon fallback', {
      props: {
        src: "",
        alt: "Johann Cavallucci",
        icon: "lucide:image"
      }
    }],
    ['with custom text', {
      props: {
        text: "moi"
      }
    }],
    ['with size xs', {
      props: {
        src: "https://avatars.githubusercontent.com/u/72015679?v=4",
        alt: "Avatar",
        size: "xs"
      }
    }],
    ['with size sm', {
      props: {
        src: "https://avatars.githubusercontent.com/u/72015679?v=4",
        alt: "Avatar",
        size: "sm"
      }
    }],
    ['with size md', {
      props: {
        src: "https://avatars.githubusercontent.com/u/72015679?v=4",
        alt: "Avatar",
        size: "md"
      }
    }],
    ['with size lg', {
      props: {
        src: "https://avatars.githubusercontent.com/u/72015679?v=4",
        alt: "Avatar",
        size: "lg"
      }
    }],
    ['with size xl', {
      props: {
        src: "https://avatars.githubusercontent.com/u/72015679?v=4",
        alt: "Avatar",
        size: "xl",
      }
    }],
    ['with no props', { }],
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MAvatar.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MAvatar)
    expect(html).toMatchSnapshot()
  })
})
