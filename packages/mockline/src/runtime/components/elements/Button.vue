<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@nuxt/schema'
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import _appConfig from '#build/app.config'
import theme from '#build/mockline/button'

import { useComponentIcons, type UseComponentIconsProps } from '#mockline/composables/useComponentIcons'

const appConfig = _appConfig as AppConfig & { mockline: { button: Partial<typeof theme> } }

const button = tv({ extend: tv(theme), ...(appConfig.mockline?.button || {}) })

type ButtonVariants = VariantProps<typeof button>

export type ButtonProps = {
  label?: string
  color?: ButtonVariants['color']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  square?: boolean
  block?: boolean
  class?: any
  ui?: Partial<typeof button.slots>
} & UseComponentIconsProps

export type ButtonSlots = {
  leading(props?: NonNullable<unknown>): any
  default(props?: NonNullable<unknown>): any
  trailing(props?: NonNullable<unknown>): any
}

const props = defineProps<ButtonProps>()
const slots = defineSlots<ButtonSlots>()

const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)

const ui = computed(() => tv({ extend: button, slots: props.ui })({
  color: props.color,
  variant: props.variant,
  size: props.size,
  loading: props.loading,
  block: props.block,
  square: props.square || (!slots.default && !props.label),
  leading: isLeading.value,
  trailing: isTrailing.value,
}))
</script>

<template>
  <component
    :is="'button'"
    :class="twMerge(ui.base({ class: props.class }))"
  >
    <slot name="leading">
      <MIcon v-if="isLeading && leadingIconName" :name="leadingIconName" :class="ui.leadingIcon()" />
    </slot>

    <span v-if="label || !!slots.default" :class="ui.label()">
      <slot>
        {{ label }}
      </slot>
    </span>

    <slot name="trailing">
      <MIcon v-if="isTrailing && trailingIconName" :name="trailingIconName" :class="ui.trailingIcon()" />
    </slot>
  </component>
</template>
