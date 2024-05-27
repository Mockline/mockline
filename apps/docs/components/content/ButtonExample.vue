<script setup lang="ts">
import { availableColors } from '#mockline-colors'

const variants = [
  'solid',
  'outline',
  'soft',
  'subtle',
  'ghost',
  'link',
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <MButton
        v-for="variant in variants"
        :key="variant"
        :variant
        label="button"
        loading
        @click="() => console.log('click')"
      />
    </div>
    <div class="grid grid-cols-6 gap-4">
      <MButton
        v-for="color in availableColors"
        :key="color"
        :label="color"
        :color
      />
    </div>
  </div>
</template>
