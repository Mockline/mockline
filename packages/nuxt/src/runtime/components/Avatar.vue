<script setup lang="ts">
import type { AvatarProps } from '@mockline/themes'
import { AvatarImage, AvatarRoot, AvatarFallback } from 'reka-ui'

import { computed } from 'vue'
import ImageComponent from '#build/mockline-image-component'
import { useComponent } from '#mockline/utils/useComponent'

const props = defineProps<AvatarProps>()

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const text = props.alt

const { getClasses } = useComponent('avatar', componentProps)

const getInitials = (name: string) => {
  if (!name) return ''
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
}

</script>

<template>
  <AvatarRoot :class="getClasses('base')">
    <AvatarImage
      :is="ImageComponent"
      v-if="props.src"
      :src="props.src"
      :class="getClasses('image')"
    />
    <AvatarFallback
      :class="getClasses('fallback')"
      :delay-ms="600"
    >
      {{ getInitials(text) }}
    </AvatarFallback>
  </AvatarRoot>
</template>

<style scoped></style>

