<script setup lang="ts">
import { computed } from 'vue'
import type { ProseHrProps, ProseHrSlots } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = withDefaults(defineProps<ProseHrProps>(), {
  orientation: 'horizontal'
})
const slots = defineSlots<ProseHrSlots>()

const componentProps = computed(() => {
  return {
    ...props,
    hasContent: !!props.label || !!props.icon || !!slots.default
  }
})

const { getClasses } = useComponent('proseHr', componentProps)
</script>

<template>
  <div :class="getClasses('root', props.class)">
    <div :class="getClasses('border', borderClass)" />

    <template v-if="label || icon || $slots.default">
      <div :class="getClasses('container')">
        <slot>
          <span v-if="label" :class="getClasses('label', labelClass)">
            {{ label }}
          </span>
          <MIcon
            v-else-if="icon"
            :name="icon"
            :class="getClasses('icon', iconClass)"
          />
        </slot>
      </div>

      <div :class="getClasses('border', borderClass)" />
    </template>
  </div>
</template>
