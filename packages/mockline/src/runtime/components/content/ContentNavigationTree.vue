<script setup lang="ts">
import { computed } from 'vue'

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
          <li v-for="(child, index) in link.children" :key="index">
            <NuxtLink :to="child._path" class="text-gray-11 hover:text-primary-11 text-sm/6" :class="$route.path === child._path ? 'text-primary' : ''">
              {{ child.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </nav>
</template>
