<script setup lang="ts">
import type { ProseIconProps } from '@mockline/themes'
import { useComponent } from '../../utils'

const props = defineProps<ProseIconProps>()

const { getClasses } = useComponent('proseIcon', props)
</script>

<template>
  <Icon :name :class="getClasses('default', props.class)" />
</template>
