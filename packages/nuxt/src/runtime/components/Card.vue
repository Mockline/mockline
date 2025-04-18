<script setup lang="ts">
import type { CardSlots, CardProps } from '@mockline/themes'
import { computed } from 'vue'
import { useComponent } from '../utils'

const slots = defineSlots<CardSlots>()
const props = defineProps<CardProps>()


const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('cardTv', componentProps)


</script>

<template>
  <div :class="getClasses('root', props.class)">
    <div v-if="slots.header" :class="getClasses('header', props.class)">
      <slot name="header" />
    </div>

    <div :class="getClasses('body', props.class)">
      <slot />
    </div>

    <div v-if="slots.footer" :class="getClasses('footer', props.class)">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>

</style>
