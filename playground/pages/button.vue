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
      <h3 class="text-lg font-semibold">
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
          color="mint"
          @click="() => console.log('click')"
        />
      </div>
      <MButton
        v-for="color in colors"
        :key="color"
        :label="color"
        :color
        variant="solid"
      />
    </div>
    <MButton
      label="test"
      class="bg-iris-6"
      @click="() => console.log('click')"
    />
  </div>
</template>

<style scoped>

</style>
