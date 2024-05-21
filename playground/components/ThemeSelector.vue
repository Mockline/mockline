<script setup lang="ts">
import { colors } from '#mockline/colors'

const canvasSaved = useCookie('mockline-canvas')
const primarySaved = useCookie('mockline-primary')

const appConfig = useAppConfig()

appConfig.mockline.primary = primarySaved.value || appConfig.mockline.primary
appConfig.mockline.canvas = canvasSaved.value || appConfig.mockline.canvas

const primary = computed({
  get() {
    return appConfig.mockline.primary
  },
  set(option) {
    appConfig.mockline.primary = option
    primarySaved.value = option
  }
})

const canvas = computed({
  get() {
    return appConfig.mockline.canvas
  },
  set(option) {
    appConfig.mockline.canvas = option
    canvasSaved.value = option
  }
})
</script>

<template>
  <div class="text-gray-12">
    <div>Canvas</div>
    <div class="grid grid-cols-8 gap-4">
      <div v-for="color in colors" :key="color" class="flex cursor-pointer items-center space-x-2" @click="() => canvas = color">
        <div class="size-4 rounded-full" :class="`bg-${color}-9`" />
        <div>{{ color }}</div>
      </div>
    </div>
    <div>Primary</div>
    <div class="grid grid-cols-8 gap-4">
      <div v-for="color in colors" :key="color" class="flex cursor-pointer items-center space-x-2" @click="() => primary = color">
        <div class="size-4 rounded-full" :class="`bg-${color}-9`" />
        <div>{{ color }}</div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
