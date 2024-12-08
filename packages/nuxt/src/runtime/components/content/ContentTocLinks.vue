<script setup lang="ts">
import type { TocLink } from '@nuxt/content'
import { useRouter } from '#imports'

type ContentTocProps = {
  title?: string
  links: TocLink[]
  active?: string,
  activeHeadings: string[]
}
const { title = 'Table of Contents', links = [] } = defineProps<ContentTocProps>()

const router = useRouter()

const scrollToHeading = (id: string): void => {
  const encodedId = encodeURIComponent(id)
  router.push(`#${encodedId}`)
}
</script>

<template>
  <ul v-if="links?.length">
    <li v-for="link in links" :key="link.text" :class="link.depth === 3 ? 'ml-3' : ''">
      <a
        class="block truncate text-sm/6"
        :class="activeHeadings.includes(link.id) ? 'text-[var(--ui-primary)]' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'"
        :href="`#${link.id}`"
        @click.prevent="scrollToHeading(link.id)"
      >
        {{ link.text }}
      </a>

      <MContentTocLinks v-if="link.children" :links="link.children" :active-headings />
    </li>
  </ul>
</template>
