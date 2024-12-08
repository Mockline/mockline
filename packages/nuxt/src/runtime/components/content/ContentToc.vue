<script setup lang="ts">
import type { TocLink } from '@nuxt/content'
import { useNuxtApp, useScrollspy } from '#imports'

const { activeHeadings, updateHeadings } = useScrollspy()

type ContentTocProps = {
  title?: string
  links: TocLink[]
}

const { title = 'On This Page', links = [] } = defineProps<ContentTocProps>()

const nuxtApp = useNuxtApp()

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    ...document.querySelectorAll('h2'),
    ...document.querySelectorAll('h3')
  ])
})
</script>

<template>
  <nav class="sticky top-[--header-height] max-h-[calc(100vh-var(--header-height))] overflow-y-auto">
    <div>
      <slot name="top " />

      <button v-if="links?.length" tabindex="-1" class="group flex w-full items-center gap-1.5 lg:cursor-text lg:select-text">
        <span class="truncate text-sm/6 font-semibold">{{ title }}</span>
      </button>

      <MContentTocLinks :links :active-headings />

      <slot name="bottom" />
    </div>
  </nav>
</template>
