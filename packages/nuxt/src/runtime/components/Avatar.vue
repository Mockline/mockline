<script setup lang="ts">
import type { AvatarProps } from '@mockline/themes'
import { AvatarImage, AvatarRoot, AvatarFallback } from 'reka-ui'

import { computed } from 'vue'
import { useComponent } from '../utils'
import ImageComponent from '#build/mockline-image-component'

const props = defineProps<AvatarProps>()

const componentProps = computed(() => {
  return {
    ...props,
  }
})

// Get the initials of the name
const getInitials = (name: string) => {
  if (!name) return ''
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
}

// Get the text to display in the fallback
const text = props.text ? props.text : getInitials(props.alt!)

// Get the icon to display in the fallback
const { icon } = props

const { getClasses } = useComponent('avatar', componentProps)

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
      <Icon v-if="icon" :name="icon" />
      <span v-else>{{ text }}</span>
    </AvatarFallback>
  </AvatarRoot>
</template>

<style scoped></style>

