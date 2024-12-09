<script setup lang="ts">
import type { TocLink } from '@nuxt/content'
import { useRouter } from 'vue-router'

const { links = [] } = defineProps<{
  links: TocLink[]
  active?: string
  activeHeadings: string[]
}>()

const router = useRouter()

const scrollToHeading = (id: string): void => {
  const encodedId = encodeURIComponent(id)

  const targetElement = document.getElementById(id)
  if (targetElement) {
    const contentPanel = document.getElementById('app-main-content')
    if (contentPanel) {
      const targetPosition = targetElement.offsetTop

      contentPanel.scrollTo({
        top: targetPosition - 20,
        behavior: 'smooth'
      })
    }
  }
  router.push(`#${encodedId}`)
}
</script>

<template>
  <ul class="space-y-2">
    <li v-for="link in links" :key="link.text" :class="[link.depth === 3 ? 'ml-4' : '']">
      <a
        class="block truncate text-xs/4 transition-all duration-500 ease-in-out"
        :class="activeHeadings.includes(link.id) ? 'text-[var(--ui-primary)]' : 'text-[var(--ui-text-secondary)] hover:text-[var(--ui-text-primary)] dark:hover:text-[var(--ui-text-primary-dark)]'"
        :href="`#${link.id}`"
        @click.prevent="scrollToHeading(link.id)"
      >
        {{ link.text }}
      </a>

      <MContentTocLinks
        v-if="link.children"
        :links="link.children"
        :active-headings
      />
    </li>
  </ul>
</template>
