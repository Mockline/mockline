<script setup lang="ts">
import type { NavigationTreeLink } from '@mockline/themes'

function formatTitle(title: string): string {
  return title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
const route = useRoute()

const links: NavigationTreeLink[] = [
  {
    title: 'Base',
    path: '/playground',
    children: [
      {
        title: 'Button',
        path: '/playground/button',
        icon: 'lucide:square-mouse-pointer',
      },
      {
        title: 'Switch',
        path: '/playground/switch',
        icon: 'lucide:toggle-right',
      },
      {
        title: 'Link',
        path: '/playground/link',
        icon: 'lucide:link',
      },
      {
        title: 'Nav Menu',
        path: '/playground/nav-menu',
        icon: 'lucide:menu',
      },
      {
        title: 'Divider',
        path: '/playground/divider',
        icon: 'lucide:minus',
      },
      {
        title: 'Page',
        path: '/playground/page',
        icon: 'lucide:file-text',
      },
      {
        title: 'Toasts',
        path: '/playground/toasts',
        icon: 'lucide:bell',
      },
      {
        title: 'Avatar',
        path: '/playground/avatar',
        icon: 'lucide:user-round',
      },
    ],
  },
  {
    title: 'Prose',
    path: '/components',
    children: [
      {
        title: 'Code',
        path: '/components/code',
        icon: 'lucide:code',
      },
      {
        title: 'Callout',
        path: '/components/callout',
        icon: 'lucide:info',
      },
      {
        title: 'Typography',
        path: '/components/typography',
        icon: 'lucide:text',
      },
      {
        title: 'List',
        path: '/components/list',
        icon: 'lucide:list',
      },
      {
        title: 'Icon',
        path: '/components/icon',
        icon: 'lucide:star',
      },
      {
        title: 'Image',
        path: '/components/img',
        icon: 'lucide:image',
      },
      {
        title: 'Hr',
        path: '/components/hr',
        icon: 'lucide:minus',
      },
      {
        title: 'Field',
        path: '/components/field',
        icon: 'lucide:check-square',
      }
    ]
  },
  {
    title: 'Content',
    path: '/content',
    children: [
      {
        title: 'Navigation Tree',
        path: '/playground/navigation-tree',
        icon: 'lucide:menu',
      }
    ]
  }
]

const { version } = useRuntimeConfig().public
</script>

<template>
  <MSidebarLayout>
    <template #sidebar>
      <MSidebar>
        <template #header>
          <div class="flex items-center justify-between text-xs mb-4">
            <div class="flex items-center gap-1">
              <Icon name="custom:mockline" />
              <span class="font-bold">
                Mockline
              </span>
            </div>
          </div>
        </template>
        <MContentNavigationTree :links color="neutral" />
        <template #footer>
          <span class="bg-[var(--color-bg-translucent)] px-2 py-1 rounded-base text-xs">
            v{{ version }}
          </span>
        </template>
      </MSidebar>
    </template>
    <MHeader sticky>
      <div class="flex justify-between items-center">
        <div class="m-0">
          {{ formatTitle(route.name as string) }}
        </div>
        <MThemeToggle size="md" class="absolute top-4 right-4 z-50" />
      </div>
    </MHeader>
    <MMain class="p-4 relative">
      <MPage>
        <slot />
      </MPage>
    </MMain>
  </MSidebarLayout>
</template>
