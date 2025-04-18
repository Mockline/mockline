<script setup lang="ts">
import { computed, useId } from 'vue'
import { Primitive, SwitchRoot, SwitchThumb, Label } from 'reka-ui'
import type { SwitchProps, SwitchSlots, SwitchEmits } from '@mockline/themes'
import { useComponent } from '../utils'
import { useAppConfig } from '#imports'

const appConfig = useAppConfig()

const props = defineProps<SwitchProps>()
const slots = defineSlots<SwitchSlots>()
const emits = defineEmits<SwitchEmits>()

const loadingIcon = props.loadingIcon || appConfig.mockline.icons.loading

const modelValue = defineModel<boolean>({ default: undefined })
const id = useId()

const componentProps = computed(() => {
  return {
    ...props,
    checked: modelValue.value,
    unchecked: !modelValue.value,
  }
})

const { getClasses } = useComponent('switchTv', componentProps)

function onUpdate(value: any): void {
  // @ts-expect-error - 'target' does not exist in type 'EventInit'
  const event = new Event('change', { target: { value } })
  emits('change', event)
}
</script>

<template>
  <Primitive :as :class="getClasses('root', props.class)">
    <div :class="getClasses('container')">
      <SwitchRoot
        :id
        v-model="modelValue"
        :disabled="disabled || loading"
        :class="getClasses('base')"
        @update:model-value="onUpdate"
      >
        <SwitchThumb :class="getClasses('thumb')">
          <Icon
            v-if="loading"
            :name="loadingIcon || appConfig.mockline.icons.loading"
            :class="getClasses('icon')"
          />
          <template v-else>
            <Icon v-if="checkedIcon && modelValue" :name="checkedIcon" :class="getClasses('icon')" />
            <Icon v-if="uncheckedIcon && !modelValue" :name="uncheckedIcon" :class="getClasses('icon')" />
          </template>
        </SwitchThumb>
      </SwitchRoot>
    </div>
    <div v-if="(label || !!slots.label) || (description || !!slots.description)" :class="getClasses('wrapper')">
      <Label v-if="label || !!slots.label" :for="id" :class="getClasses('label', labelClass)">
        <slot name="label" :label>
          {{ label }}
        </slot>
      </Label>
      <p v-if="description || !!slots.description" :class="getClasses('description')">
        <slot name="description" :description>
          {{ description }}
        </slot>
      </p>
    </div>
  </Primitive>
</template>
