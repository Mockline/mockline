<script setup lang="ts">
import type { ProseIconProps } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = defineProps<ProseIconProps>()

const { getClasses } = useComponent('proseIcon', props)
</script>

<template>
  <MIcon :name :class="getClasses('default', props.class)" />
</template>
