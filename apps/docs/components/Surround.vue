<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()

const [prev, next] = await queryContent()
  .where({
    _extension: 'md',
    _path: {
      $exists: true,
    },
    navigation: {
      $ne: false
    },
  })
  .only(['title', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
</script>

<template>
  <div class="p-4">
    <div class="flex justify-between">
      <NuxtLink v-if="prev" :to="prev._path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <span class="i-lucide-arrow-left size-4" />
          <span>{{ prev.title }}</span>
        </div>
      </NuxtLink>
      <NuxtLink v-if="next" :to="next._path" class="bg-canvas-3 flex items-center rounded p-2">
        <div class="flex items-center gap-2">
          <span>{{ next.title }}</span>
          <span class="i-lucide-arrow-right size-4" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
