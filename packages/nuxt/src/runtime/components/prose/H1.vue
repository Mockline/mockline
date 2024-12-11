<script setup lang="ts">
import { proseH1, type ProseH1Props } from '@mockline/themes'
import { twMerge } from 'tailwind-merge'
import appConfig from '#build/app.config'

const props = defineProps<ProseH1Props>()

const appConfigTheme = appConfig.mockline.themes.proseH1.slots
</script>

<template>
  <h1 :id :class="twMerge(proseH1(), appConfigTheme.default, props.class)">
    <slot />
  </h1>
</template>
