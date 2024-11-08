<script setup lang="ts">
import type { TocLink } from '@nuxt/content'

type ContentTocProps = {
  title?: string
  links: TocLink[]
}

 
const { title = 'Table of Contents', links = [] } = defineProps<ContentTocProps>()
</script>

<template>
  <nav class="sticky top-[--header-height] max-h-[calc(100vh-var(--header-height))] overflow-y-auto">
    <div>
      <slot name="top " />

      <button v-if="links?.length" tabindex="-1" class="group flex w-full items-center gap-1.5 lg:cursor-text lg:select-text">
        <span class="truncate text-sm/6 font-semibold">{{ title }}</span>
      </button>

      <MContentTocLinks :links />

      <slot name="bottom" />
    </div>
  </nav>
</template>
