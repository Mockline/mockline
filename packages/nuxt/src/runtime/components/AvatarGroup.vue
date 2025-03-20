<script setup lang="ts">
import { computed } from 'vue'
import type { AvatarGroupSlots } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

// Définir les props spécifiques pour AvatarGroup
interface AvatarGroupProps {
  max?: number | string
  size?: string
  overlap?: number | string
  // Autres props nécessaires
}

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

const max = computed(() => typeof props.max === 'string' ? Number.parseInt(props.max, 10) : props.max)

const children = computed(() => {
  let children = slots.default?.()
  if (children?.length) {
    children = children.flatMap((child: any) => {
      if (typeof child.type === 'symbol') {
        // `v-if="false"` or commented node
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

const visibleAvatars = computed(() => {
  if (!children.value.length) {
    return []
  }

  if (!max.value || max.value <= 0) {
    return [...children.value]
  }

  return [...children.value].slice(0, max.value)
})

const hiddenCount = computed(() => {
  if (!children.value.length) {
    return 0
  }

  return Math.max(0, children.value.length - visibleAvatars.value.length)
})

const { getClasses } = useComponent('avatarGroup', componentProps)
</script>

<template>
  <div :class="getClasses('base')" :style="{ '--overlap': typeof overlap === 'number' ? `${overlap}rem` : overlap }">
    <!-- Rendre uniquement les avatars visibles -->
    <template v-for="(avatar, index) in visibleAvatars" :key="index">
      <component :is="avatar" />
    </template>

    <!-- Afficher le compteur d'avatars cachés -->
    <MAvatar v-if="hiddenCount > 0" :text="`+${hiddenCount}`" :class="getClasses('remainder')" />
  </div>
</template>
