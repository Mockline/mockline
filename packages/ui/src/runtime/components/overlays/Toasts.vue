<script setup lang="ts">
import { Toaster, type ToasterProps } from 'vue-sonner'
import appConfig from '#build/app.config'

// Default amount of visible toasts
const VISIBLE_TOASTS_AMOUNT = 4

// Viewport padding
const VIEWPORT_OFFSET = '32px'

// Default lifetime of a toasts (in ms)
const TOAST_LIFETIME = 4000

// Default gap between toasts
const GAP = 14

withDefaults(defineProps<ToasterProps>(), {
  invert: false,
  position: appConfig.mockline?.toast?.position ?? 'top-center',
  hotkey: () => ['altKey', 'KeyT'],
  expand: false,
  closeButton: false,
  className: '',
  offset: VIEWPORT_OFFSET,
  theme: 'light',
  richColors: false,
  duration: appConfig.mockline?.toast?.duration ?? TOAST_LIFETIME,
  visibleToasts: VISIBLE_TOASTS_AMOUNT,
  dir: 'auto',
  gap: GAP,
  style: () => ({}),
})
</script>

<template>
  <Toaster
    :position
    :invert
    :hotkey
    :expand
    :close-button
    :offset
    :style
    :theme="$colorMode.preference === 'dark' ? 'dark' : 'light'"
    :rich-colors
    :duration
    :visible-toasts
    :toast-options
    :dir
    :gap
  />
</template>
