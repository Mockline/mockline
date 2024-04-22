<script setup lang="ts">
import { colors, grayColors } from '#mockline/colors'
import Button from '~/pages/button.vue'

const gray = useCookie('mockline-gray')
const primary = useCookie('mockline-primary')

const setGray = (color: string) => {
  gray.value = color
}

const appConfig = useAppConfig()

const primaryColors = computed(() => {
  return colors.filter(color => color !== gray.value)
})
const pri = computed({
  get() {
    return appConfig.mockline.primary
  },
  set(option) {
    appConfig.mockline.primary = option
    primary.value = option
  }
})
</script>

<template>
  <div :class="`bg-${gray}-1`">
    Gray
    <div class="grid grid-cols-8 gap-4">
      <div v-for="color in colors" :key="color" class="flex cursor-pointer items-center space-x-2" @click="() => setGray(color)">
        <div class="size-4" :class="`bg-${color}-9`" />
        <div>{{ color }}</div>
      </div>
    </div>
    <div>Primary</div>
    <div class="grid grid-cols-8 gap-4">
      <div v-for="color in primaryColors" :key="color" class="flex cursor-pointer items-center space-x-2" @click="() => pri = color">
        <div class="size-4" :class="`bg-${color}-9`" />
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
