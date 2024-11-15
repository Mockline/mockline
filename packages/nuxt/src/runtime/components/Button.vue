<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import theme from '#build/mockline/button'
import { useComponentIcons, type UseComponentIconsProps } from '#mockline/composables/useComponentIcons'

const button = tv(theme)

type ButtonVariants = VariantProps<typeof button>

export type ButtonProps = {
  label?: string
  color?: ButtonVariants['color']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  rounded?: ButtonVariants['rounded']
  square?: boolean
  block?: boolean
  class?: string
  iconClass?: string
  labelClass?: string
}

export type ButtonSlots = {
  leading(props?: NonNullable<unknown>): any
  default(props?: NonNullable<unknown>): any
  trailing(props?: NonNullable<unknown>): any
}

const props = defineProps<ButtonProps & UseComponentIconsProps>()
const slots = defineSlots<ButtonSlots>()

const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)

const ui = computed(() => tv({ extend: button })({
  ...props,
  square: props.square || (!slots.default && !props.label),
  leading: isLeading.value,
  trailing: isTrailing.value,
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
