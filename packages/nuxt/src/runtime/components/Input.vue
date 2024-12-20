<script setup lang="ts">
import { computed, useId } from 'vue'
import type { InputSlots, InputEmits, InputProps, Placeholder } from '@mockline/themes'
import { Primitive } from 'reka-ui'
import { useComponent } from '#mockline/utils/useComponent'
import { useAppConfig } from '#imports'

const appConfig = useAppConfig()

const props = defineProps<InputProps>()
const slots = defineSlots<InputSlots>()
const emits = defineEmits<InputEmits>()

const loadingIcon = props.loadingIcon || appConfig.mockline.icons.loading

const modelValue = defineModel<string>({ default: undefined })
const id = useId()

// Computed props for useComponent
const componentProps = computed(() => {
  return {
    ...props,
    // Add computed properties here if needed
  }
})
// Using useComponent for class management
const { getClasses } = useComponent('input', componentProps)

function onUpdate(value: any): void {
  // @ts-expect-error - 'target' does not exist in type 'EventInit'
  const event = new Event('change', { target: { value } })
  emits('change', event)
}
</script>
<template>
  <Primitive :as :class="getClasses('root', props.class)">
    <div :class="getClasses('container')">
      <input
        :id
        v-model="modelValue"
        :disabled="loading"
        :class="getClasses('base')"
        :placeholder
        @update:model-value="onUpdate"
      >
    </div>
  </Primitive>
</template>
