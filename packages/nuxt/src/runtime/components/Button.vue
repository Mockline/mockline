<script setup lang="ts">
import { computed } from 'vue'
import { type ButtonProps, type ButtonSlots } from '@mockline/themes'
import { useComponent } from '../utils/useComponent'
import { useComponentIcons, type UseComponentIconsProps } from '#mockline/composables/useComponentIcons'
import appConfig from '#build/app.config'

const props = defineProps<ButtonProps & UseComponentIconsProps>()
const slots = defineSlots<ButtonSlots>()

const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)

const componentProps = computed(() => {
  return {
    ...props,
    square: props.square || (!slots.default && !props.label),
    leading: isLeading.value,
    trailing: isTrailing.value,
    transitions: appConfig.mockline.transitions
  }
})

const { getClasses } = useComponent('button', componentProps)
</script>

<template>
  <component
    :is="'button'"
    :class="getClasses('base', props.class)"
  >
    <slot name="leading">
      <MIcon
        v-if="isLeading && leadingIconName"
        :name="leadingIconName"
        :class="getClasses('leadingIcon', iconClass)"
      />
    </slot>

    <span v-if="label || !!slots.default" :class="getClasses('label', labelClass)">
      <slot>
        {{ label }}
      </slot>
    </span>

    <slot name="trailing">
      <MIcon
        v-if="isTrailing && trailingIconName"
        :name="trailingIconName"
        :class="getClasses('trailingIcon', iconClass)"
      />
    </slot>
  </component>
</template>
