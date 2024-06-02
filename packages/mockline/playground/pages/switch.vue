<script setup lang="ts">
import { colors } from '#mockline/colors'

const variants = ['solid']

</script>

<template>
  <div class="space-y-4 p-4">
    <NuxtLink to="/" class="text-blue-600 hover:underline">
      Home
    </NuxtLink>
    <div class="space-y-4">
      <h3 class="text-lg font-semibold text-black dark:text-white">
        Switch
      </h3>
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
          v-for="color in colors"
          :key="color"
          :color
          variant="solid"
          size="lg"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
