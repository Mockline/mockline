import { describe, it, expect } from 'vitest';
import ComponentRender from "../component-render"
import type { TypeOf } from 'zod'
// @ts-ignore
import { MPageMarquee } from '#components'

describe('PageMarquee', () => {
  it.each([
    ['base case', {}],
    ['with reverse', { reverse: true }],
    ['with vertical orientation', { orientation: 'vertical' }],
    ['with vertical orientation and reverse', { orientation: 'vertical', reverse: true }],
    ['with custom repeat', { repeat: 6 }],
    ['with pauseOnHover', { pauseOnHover: true }],
    ['without overlay', { overlay: false }],
    ['with all options', {
      orientation: 'vertical',
      reverse: true,
      repeat: 3,
      pauseOnHover: true,
      overlay: true
    }]
  ])('renders %s correctly', async (nameOrHtml: string, options?: TypeOf<typeof MPageMarquee.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MPageMarquee, {
      default: `
        <Icon name="i-simple-icons-github" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-x" class="size-10 shrink-0" />
      `
    })
    expect(html).toMatchSnapshot()
  })

  // Test avec différents contenus
  it('renders with social media icons', async () => {
    const html = await ComponentRender('with social media icons', {}, MPageMarquee, {
      default: `
        <Icon name="i-simple-icons-github" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-x" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-instagram" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-facebook" class="size-10 shrink-0" />
      `
    })
    expect(html).toMatchSnapshot()
  })

  it('renders with text content', async () => {
    const html = await ComponentRender('with text content', {}, MPageMarquee, {
      default: `
        <span class="text-xl font-bold px-4">Vue</span>
        <span class="text-xl font-bold px-4">React</span>
        <span class="text-xl font-bold px-4">Angular</span>
        <span class="text-xl font-bold px-4">Svelte</span>
      `
    })
    expect(html).toMatchSnapshot()
  })

  // Test pour les différentes orientations
  it('renders horizontal marquee correctly', async () => {
    const html = await ComponentRender('horizontal marquee', {
      orientation: 'horizontal',
      repeat: 2
    }, MPageMarquee, {
      default: `
        <Icon name="i-simple-icons-github" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-x" class="size-10 shrink-0" />
      `
    })
    expect(html).toMatchSnapshot()
  })

  it('renders vertical marquee correctly', async () => {
    const html = await ComponentRender('vertical marquee', {
      orientation: 'vertical',
      repeat: 2
    }, MPageMarquee, {
      default: `
        <Icon name="i-simple-icons-github" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-x" class="size-10 shrink-0" />
      `
    })
    expect(html).toMatchSnapshot()
  })

  // Test pour les différentes directions (avec reverse)
  it('renders with reverse direction correctly', async () => {
    const html = await ComponentRender('reverse direction', {
      reverse: true,
      repeat: 2
    }, MPageMarquee, {
      default: `
        <Icon name="i-simple-icons-github" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-discord" class="size-10 shrink-0" />
        <Icon name="i-simple-icons-x" class="size-10 shrink-0" />
      `
    })
    expect(html).toMatchSnapshot()
  })

  // Test pour différentes valeurs de repeat
  it.each([
    [2, 'repeat 2'],
    [4, 'repeat 4'],
    [8, 'repeat 8']
  ])('renders with repeat=%i correctly', async (repeatValue, testName) => {
    const html = await ComponentRender(testName, {
      repeat: repeatValue
    }, MPageMarquee, {
      default: `<Icon name="i-simple-icons-github" class="size-10 shrink-0" />`
    })
    expect(html).toMatchSnapshot()
  })
})
