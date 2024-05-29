<script setup lang="ts">
import type { PropType } from 'vue'
import type { TocLink } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
  links: {
    type: Array as PropType<TocLink[]>,
    default: () => []
  },
})
</script>

<template>
<ul class="list-none">
  <li v-for="link in links">
    <span>{{ link.text }}</span>
  </li>
</ul>
</template>
