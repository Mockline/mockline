<script setup lang="ts">
import theme from '#build/mockline/button'

const colors = Object.keys(theme.variants.color)
const variants = Object.keys(theme.variants.variant)

definePageMeta({
  layout: 'component',
})
</script>

<template>
  <PageBody>
    <div class="flex gap-4">
      <MButton
        v-for="variant in variants"
        :key="variant"
        :variant="(variant as any)"
        :label="variant"
        loading
        @click="() => console.log('click')"
      />
      <MButton label="Home" icon="lucide:home" />
    </div>
    <div class="grid grid-cols-6 gap-4">
      <MButton
        v-for="color in colors"
        :key="color"
        :label="color"
        :color="(color as any)"
      />
    </div>
  </PageBody>
</template>
