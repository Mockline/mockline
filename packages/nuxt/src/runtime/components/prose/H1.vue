<script setup lang="ts">
import { type ProseH1Props } from '@mockline/themes'
import { twMerge } from 'tailwind-merge'
import { useComponent } from '../../utils/useComponent'

const props = defineProps<ProseH1Props>()

const { getClasses } = useComponent('proseH1')
</script>

<template>
  <h1 :id :class="twMerge(getClasses(), props.class)">
    <slot />
  </h1>
</template>
