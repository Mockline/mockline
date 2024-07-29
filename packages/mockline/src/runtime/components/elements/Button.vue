<script lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@nuxt/schema'
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import _appConfig from '#build/app.config'
import theme from '#build/mockline/button'
</script>

<script setup lang="ts">

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
  icon?: string
  loading?: boolean
  leading?: boolean
  trailing?: boolean
}

export type ButtonSlots = {
  leading(): any
  default(): any
  trailing(): any
}

const props = withDefaults(defineProps<ButtonProps>(), {
  leading: true,
  trailing: false,
})

const slots = defineSlots<ButtonSlots>()

const ui = computed(() => tv({ extend: button, slots: props.ui })({
  color: props.color,
  variant: props.variant,
  size: props.size,
  loading: props.loading,
  block: props.block,
  square: props.square || (!slots.default && !props.label),
}))
</script>

<template>
  <component
    :is="'button'"
    :class="twMerge(ui.base({ class: props.class }))"
  >
    <slot name="leading">
      <MIcon v-if="leading && loading" name="lucide:loader" :class="ui.leadingIcon(props)" />
      <MIcon v-if="leading && icon" :name="icon" :class="ui.leadingIcon(props)" />
    </slot>

    <span v-if="label || !!slots.default" :class="ui.label()">
      <slot>
        {{ label }}
      </slot>
    </span>

    <slot name="trailing">
      <MIcon v-if="trailing && loading" name="lucide:loader" :class="ui.trailingIcon(props)" />
      <MIcon v-if="trailing && icon" :name="icon" :class="ui.trailingIcon(props)" />
    </slot>
  </component>
</template>
