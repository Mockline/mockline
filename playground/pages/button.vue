<script setup lang="ts">
import { colors } from '#mockline/colors'

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
  <div class="space-y-4 p-4">
    <NuxtLink to="/" class="text-blue-600 hover:underline">
      Home
    </NuxtLink>
    <div class="space-y-4">
      <h3 class="text-lg font-semibold text-black dark:text-white">
        Button
      </h3>
      <div class="space-x-2">
        <MButton
          v-for="variant in variants"
          :key="variant"
          :variant
          label="test"
          size="md"
          rounded="lg"
          color="primary"
          @click="() => console.log('click')"
        />
      </div>
      <div class="grid grid-cols-6 gap-4">
        <MButton
          v-for="color in colors"
          :key="color"
          :label="color"
          :color
          variant="solid"
          size="md"
          rounded="lg"
        />
      </div>
    </div>
    <MButton
      label="test"
      class="bg-iris-a9 bg-opacity-25"
      @click="() => console.log('click')"
    />
  </div>
</template>

<style scoped>

</style>
