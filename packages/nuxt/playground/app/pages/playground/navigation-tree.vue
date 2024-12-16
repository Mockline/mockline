<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const links: ContentNavigationItem[] = [
  {
    children: [
      {
        path: '#',
        title: 'Getting Started',
        icon: 'lucide:rocket',
        children: [
          {
            path: '#',
            stem: 'guides/getting-started/installation',
            title: 'Installation'
          },
          {
            path: '#',
            title: 'Configuration'
          }
        ]
      },
      {
        path: '#',
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
        path: '#',
        title: 'Button',
        icon: 'lucide:square-mouse-pointer',
        children: [
          {
            path: '#',
            title: 'Primary Button',
          },
          {
            path: '#',
            title: 'Secondary Button',
          }
        ]
      },
      {
        path: '#',
        title: 'Form',
        icon: 'lucide:align-left',
        children: [
          {
            path: '/components/form/input',
            title: 'Input',
            children: [
              {
                path: '#',
                title: 'Text Input'
              },
              {
                path: '#',
                title: 'Number Input'
              }
            ]
          },
          {
            path: '#',
            title: 'Select'
          }
        ]
      },
      {
        path: '#',
        title: 'Layout',
        icon: 'lucide:layout',
        children: [
          {
            path: '#',
            title: 'Grid'
          },
          {
            path: '#',
            title: 'Container'
          }
        ]
      },
      {
        path: '#',
        title: 'Navigation',
        icon: 'lucide:menu',
        children: [
          {
            path: '#',
            title: 'Menu'
          },
          {
            path: '#',
            title: 'Breadcrumb'
          }
        ]
      }
    ],
    path: '/components',
    title: 'Components'
  },
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="space-y-4">
        <ProseH2>
          Neutral navigation tree
        </ProseH2>
        <MContentNavigationTree :links color="neutral" />
      </div>
      <div class="space-y-4">
        <ProseH2>
          Accent navigation tree
        </ProseH2>
        <MContentNavigationTree :links color="accent" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="space-y-4">
        <ProseH2>
          Size: xs
        </ProseH2>
        <MContentNavigationTree :links color="neutral" size="xs" />
      </div>
      <div class="space-y-4">
        <ProseH2>
          Size: sm (default)
        </ProseH2>
        <MContentNavigationTree :links color="neutral" size="sm" />
      </div>
      <div class="space-y-4">
        <ProseH2>
          Size: md
        </ProseH2>
        <MContentNavigationTree :links color="neutral" size="md" />
      </div>
    </div>
  </div>
</template>
