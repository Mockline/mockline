<script setup lang="ts">
import { computed } from 'vue'
import { type SwitchProps, type SwitchSlots } from '@mockline/themes'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { useComponent } from '../utils/useComponent'
import { useComponentIcons, type UseComponentIconsProps } from '#mockline/composables/useComponentIcons'
import appConfig from '#build/app.config'


const props = defineProps<SwitchProps & UseComponentIconsProps>()
const slots = defineSlots<SwitchSlots>()

const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)

const state = defineModel({
  type: Boolean,
})

const componentProps = computed(() => {
  return {
    ...props,
    square: props.square || (!props.label),
    leading: isLeading.value,
    trailing: isTrailing.value,
    transitions: appConfig.mockline.transitions
  }
})

const { getClasses } = useComponent('switchTv', componentProps)
console.log('getClasses', getClasses('base'))
</script>

<template>
  <SwitchRoot
    v-model="state"
    :class="getClasses('base')"
  >
    <SwitchThumb
      :class="getClasses('indicator', props.indicatorClass)"
    />
  </SwitchRoot>
</template>
