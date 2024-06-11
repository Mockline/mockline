<script setup lang="ts">
import { availableColors } from '#mockline-colors'

definePageMeta({
  layout: 'component',
})

const variants = ['solid']

</script>

<template>
  <div class="space-y-4 p-4">
    <div class="flex gap-4">
      <MSwitch
        v-for="variant in variants"
        :key="variant"
        :variant
        color="primary"
        loading
        @click="() => console.log('click')"
      />
    </div>
    <div class="grid grid-cols-6 gap-4">
      <MSwitch
        v-for="color in availableColors"
        :key="color"
        :color
        variant="solid"
        size="lg"
      />
    </div>
  </div>
</template>

<style scoped></style>
