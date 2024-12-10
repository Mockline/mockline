<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import { button, type ButtonProps, type ButtonSlots } from '@mockline/themes'
import { useComponentIcons, type UseComponentIconsProps } from '#mockline/composables/useComponentIcons'
import appConfig from '#build/app.config'

const props = defineProps<ButtonProps & UseComponentIconsProps>()
const slots = defineSlots<ButtonSlots>()

const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)

const ui = computed(() => tv({ extend: button })({
  ...props,
  square: props.square || (!slots.default && !props.label),
  leading: isLeading.value,
  trailing: isTrailing.value,
  transitions: appConfig.mockline.transitions
}))
</script>

<template>
  <component
    :is="'button'"
    :class="twMerge(ui.base(), props.class)"
  >
    <slot name="leading">
      <MIcon
        v-if="isLeading && leadingIconName"
        :name="leadingIconName"
        :class="twMerge(ui.leadingIcon(), iconClass)"
      />
    </slot>

    <span v-if="label || !!slots.default" :class="twMerge(ui.label(), labelClass)">
      <slot>
        {{ label }}
      </slot>
    </span>

    <slot name="trailing">
      <MIcon
        v-if="isTrailing && trailingIconName"
        :name="trailingIconName"
        :class="twMerge(ui.trailingIcon(), iconClass)"
      />
    </slot>
  </component>
</template>
