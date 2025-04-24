import { describe, it, expect } from 'vitest';
import ComponentRender from "../component-render"
import type { TypeOf } from 'zod'
// @ts-ignore
import { MPageSection } from '#components'

describe('PageSection', () => {
  it.each([
    ['base case', {}],
    ['with title and description', {
      title: 'Beautiful Vue UI components',
      description: 'Mockline provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
    }],
    ['with headline and icon', {
      headline: 'Features',
      icon: 'lucide:rocket',
      title: 'Beautiful Vue UI components'
    }],
    ['with headline, title and description', {
      headline: 'Features',
      title: 'Beautiful Vue UI components',
      description: 'Mockline provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
    }],
    ['with left alignment', {
      headline: 'Features',
      title: 'Beautiful Vue UI components',
      description: 'Mockline provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.',
      align: 'left'
    }],
    ['with horizontal orientation and reverse', {
      headline: 'Features',
      description: 'Mockline provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.',
      orientation: 'horizontal',
      reverse: true
    }]
  ])('renders %s correctly', async (nameOrHtml: string, options?: TypeOf<typeof MPageSection.props>) => {
    const html = await ComponentRender(nameOrHtml, options, MPageSection)
    expect(html).toMatchSnapshot()
  })

  // Test avec des slots
  it('renders with custom title slot', async () => {
    const html = await ComponentRender('with custom title slot', {
      headline: 'Features',
      description: 'Mockline provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.',
      align: 'center',
      orientation: 'horizontal',
      reverse: true
    }, MPageSection, {
      title: '<h2 class="text-3xl font-bold text-blue-200">Beautiful Vue UI components</h2>'
    })
    expect(html).toMatchSnapshot()
  })

  // Test avec image dans le slot default
  it('renders with image in default slot', async () => {
    const html = await ComponentRender('with image in default slot', {
      headline: 'Features',
      description: 'Mockline provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.',
      align: 'center',
      orientation: 'horizontal',
      reverse: true
    }, MPageSection, {
      title: '<h2 class="text-3xl font-bold text-blue-200">Beautiful Vue UI components</h2>',
      default: '<img src="https://picsum.photos/704/1294" alt="Illustration" class="rounded-lg max-w-[400px] object-cover">'
    })
    expect(html).toMatchSnapshot()
  })

  // Test pour l'orientation horizontale avec image
  it('renders horizontal orientation with image correctly', async () => {
    const html = await ComponentRender('horizontal orientation with image', {
      headline: 'Features',
      title: 'Beautiful Vue UI components',
      description: 'Mockline provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.',
      orientation: 'horizontal'
    }, MPageSection, {
      default: '<img src="https://picsum.photos/704/1294" alt="Illustration" class="rounded-lg max-w-[400px] object-cover">'
    })
    expect(html).toMatchSnapshot()
  })

  // Test pour l'orientation verticale avec image
  it('renders vertical orientation with image correctly', async () => {
    const html = await ComponentRender('vertical orientation with image', {
      headline: 'Features',
      title: 'Beautiful Vue UI components',
      description: 'Mockline provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.',
      orientation: 'vertical'
    }, MPageSection, {
      default: '<img src="https://picsum.photos/704/1294" alt="Illustration" class="rounded-lg max-w-[400px] object-cover">'
    })
    expect(html).toMatchSnapshot()
  })
})
