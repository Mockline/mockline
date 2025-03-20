<script setup lang="ts">
import { computed } from 'vue'
import type { AvatarGroupSlots } from '@mockline/themes'
import { AvatarGroupProps } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  max: Infinity,
  size: 'md',
  overlap: '0.25rem'
})

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const slots = defineSlots<AvatarGroupSlots>()

// Get the max number of avatars to display
const max = computed(() => typeof props.max === 'string' ? Number.parseInt(props.max, 10) : props.max)

// Get the children of the AvatarGroup
const children = computed(() => {
  let children = slots.default?.()
  if (children?.length) {
    children = children.flatMap((child: any) => {
      if (typeof child.type === 'symbol') {
        if (typeof child.children === 'string') {
          return
        }
        return child.children
      }
      return child
    }).filter(Boolean)
  }

  return children || []
})

// Calculate the visible avatars
const visibleAvatars = computed(() => {
  if (!children.value.length) {
    return []
  }

  if (!max.value || max.value <= 0) {
    return [...children.value]
  }

  return [...children.value].slice(0, max.value)
})

// Calculate the number of hidden avatars
const hiddenCount = computed(() => {
  if (!children.value.length) {
    return 0
  }

  return Math.max(0, children.value.length - visibleAvatars.value.length)
})

const { getClasses } = useComponent('avatarGroup', componentProps)

</script>

<template>
  <div :class="getClasses('root')" :style="{ '--overlap': typeof overlap === 'number' ? `${overlap}rem` : overlap }">
    <!-- Display the visible avatars -->
    <template v-for="(avatar, index) in visibleAvatars" :key="index">
      <component :is="avatar" :size />
    </template>

    <!-- Display the remainder count -->
    <MAvatar v-if="hiddenCount > 0" :text="`+${hiddenCount}`" :class="getClasses('base')" />
  </div>
</template>
