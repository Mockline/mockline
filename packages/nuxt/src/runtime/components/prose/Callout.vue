<script setup lang="ts">
import MDCSlot from '@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue'
import { computed } from 'vue'
import type { ProseCalloutProps } from '@mockline/themes'
import { useComponent } from '../../utils/useComponent'

const props = defineProps<ProseCalloutProps>()

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('proseCallout', componentProps)
</script>

<template>
  <div :class="getClasses('base', props.class)">
    <div class="flex items-center gap-4">
      <div v-if="icon" :class="getClasses('icon')">
        <MIcon :name="icon" />
      </div>
      <div>
        <MDCSlot unwrap="p" />
      </div>
    </div>
  </div>
</template>
