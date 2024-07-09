<script setup lang="ts">
import { colors } from '#mockline/utils/colors'

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
    <div class="flex flex-wrap gap-1">
      <div v-for="color in colors" :key="color" class="cursor-pointer" @click="() => canvas = color">
        <div class="size-4 rounded-full" :class="`bg-${color}-9`" />
      </div>
    </div>
    <div>Primary</div>
    <div class="flex flex-wrap gap-1">
      <div v-for="color in colors" :key="color" class="cursor-pointer" @click="() => primary = color">
        <div class="size-4 rounded-full" :class="`bg-${color}-9`" />
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
