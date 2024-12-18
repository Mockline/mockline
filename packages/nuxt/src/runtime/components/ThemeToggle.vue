<script setup lang="ts">
import type { ThemeToggleProps } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = withDefaults(defineProps<ThemeToggleProps>(), {
  lightIcon: 'lucide:moon',
  darkIcon: 'lucide:sun',
})

const { getClasses } = useComponent('themeToggle', props)
</script>

<template>
  <ClientOnly>
    <Icon
      :name="$colorMode.value === 'light' ? props.lightIcon : props.darkIcon"
      :class="getClasses('default', props.class)"
      @click="$colorMode.value === 'light' ? ($colorMode.preference = 'dark') : ($colorMode.preference = 'light')"
    />
  </ClientOnly>
</template>
