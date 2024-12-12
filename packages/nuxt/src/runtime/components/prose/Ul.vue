<script setup lang="ts">
import type { ProseUlProps } from '@mockline/themes'
import { useComponent } from '../../utils/useComponent'

const props = defineProps<ProseUlProps>()

const { getClasses } = useComponent('proseUl')
</script>

<template>
  <ul :class="getClasses('default', props.class)">
    <slot />
  </ul>
</template>
