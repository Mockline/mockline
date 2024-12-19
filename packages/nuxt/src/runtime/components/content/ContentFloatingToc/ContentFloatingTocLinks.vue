<script setup lang="ts">
import type { TocLink } from '@nuxt/content'
import { useRouter } from 'vue-router'

const { links = [], isHover, isMobile } = defineProps<{
  links: TocLink[]
  active?: string
  isHover: boolean
  activeHeadings: string[]
  isMobile: boolean
}>()

const router = useRouter()

const scrollToHeading = (id: string): void => {
  if (!isMobile || (isMobile && isHover)) {
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
}
</script>

<template>
  <div>
    <Transition
      enter-active-class="transition-all duration-100 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-100 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <ul v-if="links?.length && isHover" class="space-y-2">
        <li
          v-for="link in links"
          :key="link.text"
          :class="[
            link.depth === 3 ? 'ml-4' : ''
          ]"
        >
          <a
            class="block truncate text-xs/4 transition-all duration-500 ease-in-out"
            :class="activeHeadings.includes(link.id) ? 'text-accent' : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]'"
            :href="`#${link.id}`"
            @click.prevent="scrollToHeading(link.id)"
          >
            {{ link.text }}
          </a>

          <MContentFloatingTocLinks
            v-if="link.children"
            :links="link.children"
            :is-hover
            :active-headings
            :is-mobile
          />
        </li>
      </ul>
      <div v-else-if="links?.length" class="space-y-4">
        <div
          v-for="link in links"
          :key="link.text"
          class="flex flex-col items-end gap-1"
        >
          <div
            class="h-[4px] transition-all duration-500 ease-in-out"
            :class="[
              activeHeadings.includes(link.id)
                ? 'w-11 bg-accent'
                : 'bg-[var(--color-bg-quaternary)]',
              link.depth === 1 ? 'w-12' : link.depth === 2 ? 'w-10' : 'w-8',
              isMobile ? 'cursor-default' : 'cursor-pointer'
            ]"
          />

          <MContentFloatingTocLinks
            v-if="link.children"
            :links="link.children"
            :is-hover
            :active-headings
            :is-mobile
          />
        </div>
      </div>
    </Transition>
  </div>
</template>
