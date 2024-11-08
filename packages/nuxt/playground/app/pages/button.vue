<script setup lang="ts">
import theme from '#build/mockline/button'

const sizes = Object.keys(theme.variants.size)
const colors = Object.keys(theme.variants.color)
const variants = Object.keys(theme.variants.variant)

definePageMeta({
  layout: 'component',
})
</script>

<template>
  <MPageBody>
    <div class="flex gap-4">
      <MButton
        v-for="variant in variants"
        :key="variant"
        :variant
        :label="variant"
        loading
      />
      <MButton
        label="Home"
        trailing
        color="neutral"
        icon="lucide:home"
      />
    </div>
    <div class="flex gap-4">
      <div v-for="size in sizes" :key="size" class="flex items-center gap-2">
        <MButton
          :key="size"
          :label="size"
          :size
        />
      </div>
    </div>
    <div class="flex flex-wrap gap-4">
      <MButton
        v-for="color in colors"
        :key="color"
        :label="color"
        variant="subtle"
        :color
      />
    </div>
  </MPageBody>
</template>
