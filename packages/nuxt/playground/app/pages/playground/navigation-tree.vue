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
        badge: 'New',
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
        disabled: true,
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
      <div class="space-y-4 max-w-xs">
        <h3>
          Neutral navigation tree
        </h3>
        <MContentNavigationTree :links color="neutral" />
      </div>
      <div class="space-y-4 max-w-xs">
        <h3>
          Accent navigation tree
        </h3>
        <MContentNavigationTree :links color="accent" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="space-y-4 max-w-xs">
        <h3>
          Size: xs
        </h3>
        <MContentNavigationTree :links color="neutral" size="xs" />
      </div>
      <div class="space-y-4 max-w-xs">
        <h3>
          Size: sm (default)
        </h3>
        <MContentNavigationTree :links color="neutral" size="sm" />
      </div>
      <div class="space-y-4 max-w-xs">
        <h3>
          Size: md
        </h3>
        <MContentNavigationTree :links color="neutral" size="md" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="space-y-4 max-w-xs">
        <h3>
          With custom slots
        </h3>
        <MContentNavigationTree :links color="neutral" link-class="hover:bg-yellow-500/10">
          <template #icon="{ item, active }">
            <Icon
              v-if="item.icon"
              :name="item.icon"
              :class="{
                'text-green-500': active,
                'text-red-500': !active
              }"
            />
            <Icon v-if="!active" name="lucide:x" class="text-red-500" />
          </template>
          <template #title="{ item, active }">
            <span
              :class="{
                'text-green-500': active,
                'text-red-500': !active
              }"
            >
              {{ item.title }} <span v-if="item.active" class="text-xs bg-green-500 text-white px-1 rounded">Active</span>
            </span>
          </template>
        </MContentNavigationTree>
      </div>
    </div>
  </div>
</template>
