<script setup lang="ts">
import type { ConfigProviderProps, TooltipProviderProps } from 'reka-ui'
import { ConfigProvider, TooltipProvider, useForwardProps } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { toRef, useId } from 'vue'

export type AppProps = {
  tooltip?: TooltipProviderProps
  defaultStyle?: boolean
} & Omit<ConfigProviderProps, 'useId' | 'dir'>

export type AppSlots = {
  default(props?: object): any
}

const props = defineProps<AppProps>()
defineSlots<AppSlots>()

const configProviderProps = useForwardProps(reactivePick(props, 'scrollBody'))
const tooltipProps = toRef(() => props.tooltip)
</script>

<template>
  <ConfigProvider :use-id="() => (useId() as string)" v-bind="configProviderProps">
    <TooltipProvider v-bind="tooltipProps">
      <div :class="defaultStyle ? 'h-full text-gray-900 bg-neutral dark:text-white' : ''">
        <slot />
      </div>
    </TooltipProvider>
  </ConfigProvider>
</template>

<style>
html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}
</style>
