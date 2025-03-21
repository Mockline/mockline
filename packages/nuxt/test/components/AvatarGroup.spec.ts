import { describe, it, expect } from 'vitest'
import ComponentRender from '../component-render'
import type { TypeOf } from 'zod'
// @ts-ignore
import { MAvatarGroup, MAvatar } from '#components'

describe('AvatarGroup', () => {
  it.each([
    ['basic group', {
      slots: {
        default: () => `
          <MAvatar src="https://avatars.githubusercontent.com/u/72015679?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/5158436?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/71938701?v=4" alt="Avatar" />
        `
      }
    }],
    ['with max limit', {
      props: {
        max: 2,
        size: "md"
      },
      slots: {
        default: () => `
          <MAvatar src="https://avatars.githubusercontent.com/u/72015679?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/5158436?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/71938701?v=4" alt="Avatar" />
          <MAvatar />
          <MAvatar src="https://avatars.githubusercontent.com/u/71938701?v=4" alt="Avatar" />
        `
      }
    }],
    ['with exact max', {
      props: {
        max: 4,
        size: "md"
      },
      slots: {
        default: () => `
          <MAvatar src="https://avatars.githubusercontent.com/u/72015679?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/5158436?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/71938701?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/71981971?v=4" alt="Avatar" />
        `
      }
    }],
    ['with fewer than max', {
      props: {
        max: 4,
        size: "md"
      },
      slots: {
        default: () => `
          <MAvatar src="https://avatars.githubusercontent.com/u/72015679?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/71938701?v=4" alt="Avatar" />
        `
      }
    }],
    ['with larger size', {
      props: {
        max: 4,
        size: "xl"
      },
      slots: {
        default: () => `
          <MAvatar src="https://avatars.githubusercontent.com/u/72015679?v=4" alt="Avatar" />
          <MAvatar src="https://avatars.githubusercontent.com/u/71938701?v=4" alt="Avatar" />
        `
      }
    }],
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof MAvatarGroup.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MAvatarGroup)
    expect(html).toMatchSnapshot()
  })
})
