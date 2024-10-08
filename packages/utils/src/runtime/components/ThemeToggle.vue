<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'size-5'
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
    class="cursor-pointer text-black dark:text-white"
    aria-label="Theme"
    @click="switchTheme"
  >
    <MIcon :name="themeIcon" :class="size" />
  </button>
</template>
