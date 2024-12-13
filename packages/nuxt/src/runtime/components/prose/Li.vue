<script setup lang="ts">
import type { ProseLiProps } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProseLiProps>()

const { getClasses } = useComponentTheme('proseLi')
</script>

<template>
  <li :class="getClasses('default', props.class)">
    <slot />
  </li>
</template>
