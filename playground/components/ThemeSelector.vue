<script setup lang="ts">
import { colors } from '#mockline/colors'

const graySaved = useCookie('mockline-gray')
const primarySaved = useCookie('mockline-primary')

const appConfig = useAppConfig()

appConfig.mockline.primary = primarySaved.value || appConfig.mockline.primary
appConfig.mockline.gray = graySaved.value || appConfig.mockline.gray

const primary = computed({
  get() {
    return appConfig.mockline.primary
  },
  set(option) {
    appConfig.mockline.primary = option
    primarySaved.value = option
  }
})

const gray = computed({
  get() {
    return appConfig.mockline.gray
  },
  set(option) {
    appConfig.mockline.gray = option
    graySaved.value = option
  }
})
</script>

<template>
  <div :class="`bg-gray-1`">
    Gray
    <div class="grid grid-cols-8 gap-4">
      <div v-for="color in colors" :key="color" class="flex cursor-pointer items-center space-x-2" @click="() => gray = color">
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
    <button class="bg-primary my-8 px-2 py-1" @click="() => console.log('click')">
      Primary
    </button>
    <slot />
  </div>
</template>

<style scoped>

</style>
