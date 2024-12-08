<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const { links } = defineProps<{
  links: ContentNavigationItem[]
}>()

const route = useRoute()

const isLinkActive = (link: ContentNavigationItem): boolean => {
  return route.path.startsWith(link.path)
}
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
            <NuxtLink
              :to="child.path"
              class="text-sm hover:text-[var(--ui-primary)]"
              :class="isLinkActive(child) ? 'text-[var(--ui-primary)]' : 'text-neutral-600 dark:text-neutral-400'"
            >
              {{ child.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </nav>
</template>
