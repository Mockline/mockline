<script setup lang="ts">
import type { ProseAProps } from '@mockline/themes'
import { useComponentTheme } from '#mockline/composables/useComponent'

const props = defineProps<ProseAProps>()

const { getClasses } = useComponentTheme('proseA')
</script>

<template>
  <NuxtLink :href="props.href" :target="props.target" :class="getClasses('default', props.class)">
    <slot />
  </NuxtLink>
</template>
