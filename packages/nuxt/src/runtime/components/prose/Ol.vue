<script setup lang="ts">
import type { ProseOlProps } from '@mockline/themes'
import { useComponent } from '../../utils/useComponent'

const props = defineProps<ProseOlProps>()

const { getClasses } = useComponent('proseOl')
</script>

<template>
  <ol :class="getClasses('default', props.class)">
    <slot />
  </ol>
</template>
