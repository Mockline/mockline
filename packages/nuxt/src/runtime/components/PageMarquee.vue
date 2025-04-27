<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import type { PageMarqueeProps } from '@mockline/themes'
import { useComponent } from '../utils'

const props = withDefaults(defineProps<PageMarqueeProps>(), {
  repeat: 4,
  overlay: true,
  orientation: 'horizontal'
})

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('pageMarqueeTv', componentProps)
</script>

<template>
  <Primitive :as :class="getClasses('root', props.class)">
    <div v-for="i in repeat" :key="i" :class="getClasses('content')">
      <slot />
    </div>
  </Primitive>
</template>

<style>
@keyframes marquee {
  from { transform: translate3d(0, 0, 0); will-change: transform; }
  to { transform: translate3d(calc(-100% - var(--gap)), 0, 0); will-change: transform; }
}

@keyframes marquee-rtl {
  from { transform: translate3d(calc(100%), 0, 0); will-change: transform; }
  to { transform: translate3d(calc(-100% * var(--repeat) - var(--gap) * var(--repeat)), 0, 0); will-change: transform; }
}

@keyframes marquee-vertical {
  from { transform: translate3d(0, 0, 0); will-change: transform; }
  to { transform: translate3d(0, calc(-100% - var(--gap)), 0); will-change: transform; }
}

@keyframes marquee-vertical-rtl {
  from { transform: translate3d(0, calc(100%), 0); will-change: transform; }
  to { transform: translate3d(0, calc(-100% * var(--repeat) - var(--gap) * var(--repeat)), 0); will-change: transform; }
}
</style>
