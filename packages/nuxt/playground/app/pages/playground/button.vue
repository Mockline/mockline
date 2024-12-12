<script setup lang="ts">
import { button } from '@mockline/themes'

const sizes = Object.keys(button.variants.size) as Array<keyof typeof button.variants.size>
const variants = Object.keys(button.variants.variant) as Array<keyof typeof button.variants.variant>
</script>

<template>
  <MPageBody>
    <ProseH3>
      Variants
    </ProseH3>
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
    </div>
    <ProseH3>
      Sizes
    </ProseH3>
    <div class="flex gap-4">
      <div v-for="size in sizes" :key="size" class="flex items-center gap-2">
        <MButton
          :key="size"
          :label="size"
          :size
        />
      </div>
    </div>
    <div>
      <MButton label="test" class="bg-yellow-500" icon="lucide:rocket" />
    </div>
  </MPageBody>
</template>
