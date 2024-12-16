<script setup lang="ts">
import { computed } from 'vue'
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import type { ProseImgProps } from '@mockline/themes'
import { useRuntimeConfig } from '#imports'
import { useComponent } from '#mockline/utils/useComponent'
import ImageComponent from '#build/mockline-image-component'

const props = defineProps<ProseImgProps>()

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})

const { getClasses } = useComponent('proseImg', props)
</script>

<template>
  <component
    :is="ImageComponent"
    :src="refinedSrc"
    :alt
    :width
    :height
    :class="getClasses('default', props.class)"
  />
</template>
