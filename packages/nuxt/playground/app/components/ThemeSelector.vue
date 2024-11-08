<script setup lang="ts">
import { colors } from '#mockline/utils/colors'

const neutralSaved = useCookie('mockline-neutral')
const primarySaved = useCookie('mockline-primary')

const appConfig = useAppConfig()

appConfig.mockline.colors.primary = primarySaved.value || appConfig.mockline.colors.primary
appConfig.mockline.colors.neutral = neutralSaved.value || appConfig.mockline.colors.neutral

const primary = computed({
  get() {
    return appConfig.mockline.colors.primary
  },
  set(option) {
    appConfig.mockline.colors.primary = option
    primarySaved.value = option
  }
})

const neutral = computed({
  get() {
    return appConfig.mockline.colors.neutral
  },
  set(option) {
    appConfig.mockline.colors.neutral = option
    neutralSaved.value = option
  }
})
</script>

<template>
  <div class="text-gray-12">
    <div>Neutral</div>
    <div class="flex flex-wrap gap-1">
      <div v-for="color in colors" :key="color" class="cursor-pointer" @click="() => neutral = color">
        <div class="size-4 rounded-full" :class="`bg-[var(--ui-${color})]`" />
      </div>
    </div>
    <div>Primary</div>
    <div class="flex flex-wrap gap-1">
      <div v-for="color in colors" :key="color" class="cursor-pointer" @click="() => primary = color">
        <div class="size-4 rounded-full" :class="`bg-[var(--ui-${color})]`" />
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
