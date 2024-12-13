<script setup lang="ts">
import type { ProseUlProps } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProseUlProps>()

const { getClasses } = useComponentTheme('proseUl')
</script>

<template>
  <ul :class="getClasses('default', props.class)">
    <slot />
  </ul>
</template>
