<script setup lang="ts">
import { proseA, type ProseAProps } from '@mockline/themes'

const props = defineProps<ProseAProps>()

const ui = proseA()
</script>

<template>
  <NuxtLink :href="props.href" :target="props.target" :class="ui({ class: props.class })">
    <slot />
  </NuxtLink>
</template>
