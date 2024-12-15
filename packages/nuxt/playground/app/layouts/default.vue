<script setup lang="ts">
function formatTitle(title: string): string {
  return title
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
const route = useRoute()

const components = ['button', 'switch', 'nav-menu', 'page']
const contentComponents = ['code', 'callout', 'typography', 'list']
</script>

<template>
  <MSidebarLayout>
    <template #sidebar>
      <MSidebar>
        <div class="p-2 flex flex-col gap-1">
          <span>Base</span>
          <div class="p-2 flex flex-col gap-2 text-sm">
            <div v-for="component in components" :key="component">
              <NuxtLink :to="`/playground/${component}`" class="hover:underline" :class="$route.path.includes(component) ? 'font-semibold text-blue-600' : ''">
                {{ component.charAt(0).toUpperCase() + component.slice(1) }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="p-2 flex flex-col gap-1">
          <span>Content</span>
          <div class="p-2 flex flex-col gap-2 text-sm">
            <div v-for="component in contentComponents" :key="component">
              <NuxtLink :to="`/components/${component}`" class="hover:underline" :class="$route.path.includes(component) ? 'font-semibold text-blue-600' : ''">
                {{ component.charAt(0).toUpperCase() + component.slice(1) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </MSidebar>
    </template>
    <MMain class="p-4 relative">
      <MThemeToggle size="sm" class="absolute top-4 right-4 z-50" />
      <MPage>
        <h1 class="text-gray-12 text-2xl font-semibold">
          {{ formatTitle(route.name as string) }}
        </h1>
        <slot />
      </MPage>
    </MMain>
  </MSidebarLayout>
</template>
