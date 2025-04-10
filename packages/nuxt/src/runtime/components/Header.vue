<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import type { HeaderProps, HeaderSlots } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = withDefaults(defineProps<HeaderProps>(), {
  as: 'header',
})

const slots = defineSlots<HeaderSlots>()

const header = ref(null)
const { height } = useElementSize(header)

onMounted(() => {
  document.documentElement.style.setProperty('--header-height', `${height.value}px`)
})

const { getClasses } = useComponent('header', props)
</script>

<template>
  <component :is="props.as" ref="header" :class="getClasses('default', props.class)">
    <slot name="left" />
    <slot name="default" />
    <slot name="right" />
  </component>
</template>

