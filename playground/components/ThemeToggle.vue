<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'size-4'
  }
})

const colorMode = useColorMode()

const switchTheme = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  colorMode.preference = colorMode.value
}
</script>

<template>
  <button
    class="text-black dark:text-white cursor-pointer"
    aria-label="Theme"
    @click="switchTheme"
  >
    <MIcon :name="$colorMode.value === 'light' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" />
  </button>
</template>
