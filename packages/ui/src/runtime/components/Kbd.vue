<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@nuxt/schema'
import { Primitive } from 'radix-vue'
import type { KbdKey } from '../composables/useKbd'
import { useKbd } from '../composables/useKbd'
import _appConfig from '#build/app.config'
import theme from '#build/mockline/kbd'

const appConfig = _appConfig as AppConfig & { ui: { kbd: Partial<typeof theme> } }

const kbd = tv({ extend: tv(theme), ...(appConfig.mockline?.kbd || {}) })

type KbdVariants = VariantProps<typeof kbd>

export type KbdProps = {
  /**
   * The element or component this component should render as.
   * @defaultValue 'kbd'
   */
  as?: any
  value?: KbdKey | string
  variant?: KbdVariants['variant']
  size?: KbdVariants['size']
  class?: any
}

export type KbdSlots = {
  default(props?: object): any
}

const props = withDefaults(defineProps<KbdProps>(), {
  as: 'kbd'
})
defineSlots<KbdSlots>()

const { getKbdKey } = useKbd()
</script>

<template>
  <Primitive :as :class="kbd({ variant, size, class: props.class })">
    <slot>
      {{ getKbdKey(value) }}
    </slot>
  </Primitive>
</template>
