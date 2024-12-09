<script setup lang="ts">
import type { TocLink } from '@nuxt/content'
import { useScrollspy } from '../../../composables/useScrollspy'
import { useNuxtApp } from '#imports'

const { links = [], title = 'On This Page' } = defineProps<{
  links: TocLink[]
  title?: string
}>()

const { activeHeadings, updateHeadings } = useScrollspy()

const nuxtApp = useNuxtApp()
nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    ...document.querySelectorAll('h2'),
    ...document.querySelectorAll('h3')
  ])
})
</script>

<template>
  <div>
    <h2 class="text-xs/4 font-bold">
      {{ title }}
    </h2>
    <nav>
      <MContentTocLinks :links :active-headings />
    </nav>
  </div>
</template>
