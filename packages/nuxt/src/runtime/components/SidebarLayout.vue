<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { watch, computed } from 'vue'
import { useCookie } from '#imports'

type SidebarLayoutProps = {
  minSize?: number
  maxSize?: number
  collapsedSize?: number
  defaultSize?: number
}

const props = withDefaults(defineProps<SidebarLayoutProps>(), {
  minSize: 15,
  maxSize: 15,
  collapsedSize: 0,
  defaultSize: 20,
})

type SidebarLayoutSlots = {
  sidebar(props?: NonNullable<unknown>): any
  default(props?: NonNullable<unknown>): any
}

const slots = defineSlots<SidebarLayoutSlots>()

const layout = useCookie<number[]>('splitter:layout')

/*const breakpoints = useBreakpoints(breakpointsTailwind)

const breakpoint = useCookie<string>('sidebar-breakpoint')

const currentBreakpoint = computed(() => breakpoints.active())

watch(currentBreakpoint, () => {
  breakpoint.value = currentBreakpoint.value
})*/
</script>

<template>
  <SplitterGroup
    id="sidebar-layout"
    direction="horizontal"
    auto-save-id="mockline-sidebar"
    @layout="layout = $event"
  >
    <SplitterPanel
      id="sidebar-layout-sidebar"
      :min-size="props.minSize"
      :max-size="props.maxSize"
      :collapsed-size="props.collapsedSize"
      :default-size="layout[0]"
      collapsible
    >
      <slot name="sidebar" />
    </SplitterPanel>
    <SplitterResizeHandle
      id="sidebar-layout-resize-handle"
      class="w-2"
    />
    <SplitterPanel
      id="sidebar-layout-content"
      :min-size="50"
      :default-size="layout[1]"
      style="overflow-y: auto;"
    >
      <slot name="default" />
    </SplitterPanel>
  </SplitterGroup>
</template>
