<script setup lang="ts">
export type NavigationTree = {
  title: string
  _path: string
  children: NavigationTree[]
}

export type NavigationTreeGroup = {
  title: string
  children: NavigationTree[]
}

export type NavigationTreeProps = {
  links: NavigationTreeGroup[]
  class?: string
}

const props = withDefaults(defineProps<NavigationTreeProps>(), {
  links: () => []
})
</script>

<template>
  <nav v-if="links?.length" class="space-y-3">
    <template v-for="(link, index) in links" :key="index">
      <div>
        <h3 class="truncate text-sm/6 font-semibold">
          {{ link.title }}
        </h3>
        <ul class="flex flex-col gap-1">
          <li v-for="(child, index_) in link.children" :key="index_">
            <NuxtLink :to="child._path" class="text-sm hover:text-[var(--ui-primary)]" :class="$route.path === child._path ? 'text-[var(--ui-primary)]' : 'text-neutral-600 dark:text-neutral-400'">
              {{ child.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </nav>
</template>
