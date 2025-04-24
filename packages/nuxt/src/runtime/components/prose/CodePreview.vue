<script setup lang="ts">
import type { ProseCodePreviewProps, ProseCodePreviewSlots } from '@mockline/themes'
import { computed } from 'vue'
import { useComponent } from '../../utils'

const props = defineProps<ProseCodePreviewProps>()
const slots = defineSlots<ProseCodePreviewSlots>()

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('proseCodePreview', componentProps)
</script>

<template>
  <div :class="getClasses('root', props.class)">
    <div :class="getClasses('preview')">
      <slot />
    </div>

    <div v-if="!!slots.code" :class="getClasses('code')">
      <slot name="code" />
    </div>
  </div>
</template>
