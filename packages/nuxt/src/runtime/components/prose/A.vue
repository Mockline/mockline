<script setup lang="ts">
import type { ProseAProps } from '@mockline/themes'
import { useComponent } from '../../utils/useComponent'

const props = defineProps<ProseAProps>()

const { getClasses } = useComponent('proseA')
</script>

<template>
  <NuxtLink :href="props.href" :target="props.target" :class="getClasses('default', props.class)">
    <slot />
  </NuxtLink>
</template>
