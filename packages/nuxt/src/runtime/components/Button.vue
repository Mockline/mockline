<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps, ButtonSlots } from '@mockline/themes'
import { useForwardProps } from 'reka-ui'
import { useComponentIcons, type UseComponentIconsProps } from '../composables/useComponentIcons'
import { pickLinkProps } from '../utils/link'
import { useComponent, omit } from '../utils'

const props = defineProps<ButtonProps & UseComponentIconsProps>()
const slots = defineSlots<ButtonSlots>()

const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)
const linkProps = useForwardProps(pickLinkProps(props))

const componentProps = computed(() => {
  return {
    ...props,
    square: props.square || (!slots.default && !props.label),
    leading: isLeading.value,
    trailing: isTrailing.value,
  }
})

const { getClasses } = useComponent('button', componentProps)
</script>

<template>
  <MLink
    v-slot="{ ...slotProps }"
    :disabled="disabled || loading"
    :class="getClasses('base', props.class)"
    v-bind="omit(linkProps, ['type', 'disabled'])"
    custom
  >
    <MLinkBase v-bind="slotProps" :class="getClasses('base', props.class)">
      <slot name="leading">
        <Icon
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
        <Icon
          v-if="isTrailing && trailingIconName"
          :name="trailingIconName"
          :class="getClasses('trailingIcon', iconClass)"
        />
      </slot>
    </MLinkBase>
  </MLink>
</template>
