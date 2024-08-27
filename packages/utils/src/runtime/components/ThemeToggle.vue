<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'size-4'
  }
})

const colorMode = useColorMode()

const themeIcon = computed(() => {
  return colorMode.value === 'light' ? 'heroicons:sun-20-solid' : 'heroicons:moon-20-solid'
})

const switchTheme = (): void => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  colorMode.preference = colorMode.value
}
</script>

<template>
  <button
    class="text-black dark:text-white"
    aria-label="Theme"
    @click="switchTheme"
  >
    <Icon :name="themeIcon" :class="size" />
  </button>
</template>
