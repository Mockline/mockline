<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { onMounted, ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import type { HeaderProps, HeaderSlots } from '@mockline/themes'
import { useComponent } from '../utils'

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
  <Primitive ref="header" :as="props.as" :class="getClasses('default', props.class)">
    <slot name="left" />
    <slot name="default" />
    <slot name="right" />
  </Primitive>
</template>

