<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'size-4'
  }
})

const colorMode = useColorMode()

const switchTheme = (): void => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  colorMode.preference = colorMode.value
}
</script>

<template>
  <button
    class="text-black dark:text-white"
    :class="[$colorMode.value === 'light' ? 'heroicons:moon-20-solid' : 'heroicons:sun-20-solid', size]"
    aria-label="Theme"
    @click="switchTheme"
  />
</template>
