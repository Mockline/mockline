<script setup lang="ts">
function formatTitle(title: string): string {
  return title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
const route = useRoute()

const components = ['button', 'nav-menu', 'page']
const contentComponents = ['navigation-tree']
const proseComponents = ['code', 'callout', 'typography', 'list', 'icon', 'img']
</script>

<template>
  <MSidebarLayout>
    <template #sidebar>
      <MSidebar>
        <div class="p-2 flex flex-col gap-1">
          <span>Base</span>
          <div class="p-2 flex flex-col gap-2 text-sm">
            <div v-for="component in components" :key="component">
              <NuxtLink :to="`/playground/${component}`" class="hover:underline" :class="$route.path.includes(component) ? 'font-semibold text-accent' : 'hover:text-accent-hover'">
                {{ component.charAt(0).toUpperCase() + component.slice(1) }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="p-2 flex flex-col gap-1">
          <span>Prose</span>
          <div class="p-2 flex flex-col gap-2 text-sm">
            <div v-for="component in proseComponents" :key="component">
              <NuxtLink :to="`/components/${component}`" class="hover:underline" :class="$route.path.includes(component) ? 'font-semibold text-accent' : 'hover:text-accent-hover'">
                {{ component.charAt(0).toUpperCase() + component.slice(1) }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="p-2 flex flex-col gap-1">
          <span>Content</span>
          <div class="p-2 flex flex-col gap-2 text-sm">
            <div v-for="component in contentComponents" :key="component">
              <NuxtLink :to="`/playground/${component}`" class="hover:underline" :class="$route.path.includes(component) ? 'font-semibold text-accent' : 'hover:text-accent-hover'">
                {{ component.charAt(0).toUpperCase() + component.slice(1) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </MSidebar>
    </template>
    <MHeader sticky class="px-4 py-2 bg-[var(--ui-bg-elevated)]">
      <div class="flex justify-between items-center">
        <ProseH2 class="m-0">
          {{ formatTitle(route.name as string) }}
        </ProseH2>
        <MThemeToggle size="sm" class="absolute top-4 right-4 z-50" />
      </div>
    </MHeader>
    <MMain class="p-4 relative">
      <MPage>
        <slot />
      </MPage>
    </MMain>
  </MSidebarLayout>
</template>
