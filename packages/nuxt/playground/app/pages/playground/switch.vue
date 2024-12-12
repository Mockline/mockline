<script setup lang="ts">
import { switchTv } from '@mockline/themes'

// const sizes = Object.keys(switchTv.variants.size) as Array<keyof typeof switchTv.variants.size>
const variants = Object.keys(switchTv.variants.variant) as Array<keyof typeof switchTv.variants.variant>
const state = ref(false)
definePageMeta({
  layout: 'component',
})
</script>

<template>
  <MPageBody>
    <ProseH3>
      Variants
    </ProseH3>
    <div class="flex flex-wrap gap-4">
      <MSwitch
        v-for="variant in variants"
        :key="variant"
        v-model="state"
        :variant
        :label="variant"
        indicator-class="bg-yellow-500"
        loading
      />
    </div>
  </MPageBody>
</template>
