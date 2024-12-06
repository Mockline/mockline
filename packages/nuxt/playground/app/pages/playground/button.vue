<script setup lang="ts">
import { button } from '@mockline/themes'
import { colors } from '@mockline/types'

const sizes = Object.keys(button.variants.size)
const variants = Object.keys(button.variants.variant)

definePageMeta({
  layout: 'component',
})
</script>

<template>
  <MPageBody>
    <div class="flex flex-wrap gap-4">
      <MButton
        v-for="variant in variants"
        :key="variant"
        :variant
        :label="variant"
        loading
      />
    </div>
    <div class="flex flex-wrap gap-4">
      <MButton
        v-for="variant in variants"
        :key="variant"
        :variant
        :label="variant"
        color="danger"
        loading
      />
    </div>
    <div class="flex flex-wrap gap-4">
      <MButton
        v-for="variant in variants"
        :key="variant"
        :variant
        :label="variant"
        color="neutral"
        loading
      />
      <div class="flex gap-4">
        <div v-for="size in sizes" :key="size" class="flex items-center gap-2">
          <MButton
            :key="size"
            :label="size"
            :size
          />
        </div>
      </div>
    </div>
  </MPageBody>
</template>
