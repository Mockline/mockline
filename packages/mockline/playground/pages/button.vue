<script setup lang="ts">
import { availableColors } from '#mockline-colors'

definePageMeta({
  layout: 'component',
})

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
  <PageBody>
    <div class="flex gap-4">
      <MButton
        v-for="variant in variants"
        :key="variant"
        :variant
        label="test"
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
  </PageBody>
</template>
