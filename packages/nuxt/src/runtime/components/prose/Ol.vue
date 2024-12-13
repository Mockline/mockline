<script setup lang="ts">
import type { ProseOlProps } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProseOlProps>()

const { getClasses } = useComponentTheme('proseOl')
</script>

<template>
  <ol :class="getClasses('default', props.class)">
    <slot />
  </ol>
</template>
