<script lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@nuxt/schema'
import { computed } from 'vue'
import _appConfig from '#build/app.config'
import theme from '#build/mockline/button'

const appConfig = _appConfig as AppConfig & { mockline: { button: Partial<typeof theme> } }

const button = tv({ extend: tv(theme), ...(appConfig.mockline?.button || {}) })

type ButtonVariants = VariantProps<typeof button>

export type ButtonProps = {
  label?: string
  color?: ButtonVariants['color']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  /** Render the button with equal padding on all sides. */
  square?: boolean
  /** Render the button full width. */
  block?: boolean
  class?: any
  ui?: Partial<typeof button.slots>
  icon?: string
  loading?: boolean
  iconPosition?: 'left' | 'right'
}

export type ButtonSlots = {
  leading(): any
  default(): any
  trailing(): any
}
</script>

<script setup lang="ts">
const props = defineProps<ButtonProps>()
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
    :class="ui.base({ class: props.class })"
  >
    <slot name="leading">
      <span v-if="iconPosition === 'left' && loading" class="i-lucide-loader animate-spin" />
    </slot>

    <span v-if="label || !!slots.default" :class="ui.label()">
      <slot>
        {{ label }}
      </slot>
    </span>
    <span v-if="icon" class="text-gray-12 size-6">
      <MIcon :name="icon" />
    </span>

    <slot name="trailing">
      <span v-if="iconPosition === 'left' && loading" class="i-lucide-loader animate-spin" />
    </slot>
  </component>
</template>
