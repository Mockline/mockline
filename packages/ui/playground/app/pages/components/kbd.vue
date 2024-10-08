<script setup lang="ts">
import { kbdKeysMap } from '@mockline/ui/runtime/composables/useKbd.ts'
import theme from '#build/mockline/kbd'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>

const kbdKeys = Object.keys(kbdKeysMap)
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-1">
      <MKbd value="meta" />
    </div>
    <div class="flex items-center gap-1">
      <MKbd value="meta" variant="subtle" />
    </div>
    <div class="flex items-center gap-1">
      <MKbd value="meta" variant="solid" />
    </div>
    <div class="flex items-center gap-1">
      <MKbd v-for="(kdbKey, index) in kbdKeys" :key="index" :value="kdbKey" />
    </div>
    <div class="flex items-center gap-1">
      <MKbd v-for="size in sizes" :key="size" value="meta" :size />
    </div>
  </div>
</template>
