<script setup lang="ts">
import type { ConfigProviderProps, TooltipProviderProps } from 'reka-ui'
import { ConfigProvider, TooltipProvider, useForwardProps } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { toRef, useId } from 'vue'
import { useComponent } from '../utils'

export type AppProps = {
  class?: string
  transparent?: boolean
  tooltip?: TooltipProviderProps
} & Omit<ConfigProviderProps, 'useId' | 'dir'>

export type AppSlots = {
  default(props?: object): any
}

const props = defineProps<AppProps>()
defineSlots<AppSlots>()

const configProviderProps = useForwardProps(reactivePick(props, 'scrollBody'))
const tooltipProps = toRef(() => props.tooltip)
const { getClasses } = useComponent('app', props)
</script>

<template>
  <ConfigProvider :use-id="() => useId()" v-bind="configProviderProps">
    <TooltipProvider v-bind="tooltipProps">
      <div :class="getClasses('root', props.class)">
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
