<script setup lang="ts">
import { proseA, type ProseAProps } from '@mockline/themes'

const props = defineProps<ProseAProps>()
</script>

<template>
  <NuxtLink :href="props.href" :target="props.target" :class="proseA({ class: props.class })">
    <slot />
  </NuxtLink>
</template>
