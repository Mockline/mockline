<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const links: ContentNavigationItem[] = [
  {
    children: [
      {
        path: '/guides/getting-started',
        title: 'Getting Started',
        icon: 'lucide:rocket',
        children: [
          {
            path: '/guides/getting-started/installation',
            stem: 'guides/getting-started/installation',
            title: 'Installation'
          },
          {
            path: '/guides/getting-started/configuration',
            title: 'Configuration'
          }
        ]
      },
      {
        path: '/guides/development',
        title: 'Development',
        icon: 'lucide:code',
        active: true
      }
    ],
    page: false,
    path: '/guides',
    stem: 'guides',
    title: 'Guides'
  },
  {
    children: [
      {
        path: '/components/button',
        title: 'Button',
        icon: 'lucide:square-mouse-pointer',
        children: [
          {
            path: '/components/button/primary',
            title: 'Primary Button',
          },
          {
            path: '/components/button/secondary',
            title: 'Secondary Button',
          }
        ]
      },
      {
        path: '/components/form',
        title: 'Form',
        icon: 'lucide:align-left',
        children: [
          {
            path: '/components/form/input',
            title: 'Input',
            children: [
              {
                path: '/components/form/input/text',
                title: 'Text Input'
              },
              {
                path: '/components/form/input/number',
                title: 'Number Input'
              }
            ]
          },
          {
            path: '/components/form/select',
            title: 'Select'
          }
        ]
      },
      {
        path: '/components/layout',
        stem: 'components/layout',
        title: 'Layout',
        icon: 'lucide:layout',
        children: [
          {
            path: '/components/layout/grid',
            title: 'Grid'
          },
          {
            path: '/components/layout/container',
            title: 'Container'
          }
        ]
      },
      {
        path: '/components/navigation',
        title: 'Navigation',
        icon: 'lucide:menu',
        children: [
          {
            path: '/components/navigation/menu',
            title: 'Menu'
          },
          {
            path: '/components/navigation/breadcrumb',
            title: 'Breadcrumb'
          }
        ]
      }
    ],
    page: false,
    path: '/components',
    title: 'Components'
  },
]
</script>

<template>
  <div>
    <MContentNavigationTree :links color="neutral" />
  </div>
</template>
