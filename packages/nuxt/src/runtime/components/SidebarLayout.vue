<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { watch, computed, ref } from 'vue'
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

const layout = useCookie<number[]>('splitter:layout')
const sidebar = ref<InstanceType<typeof SplitterPanel>>()


const toggleSidebar = (): void => {
  const isCollapsed = sidebar.value?.isCollapsed
  if (isCollapsed) sidebar.value?.expand()
  else
    sidebar.value?.collapse()
}

defineExpose({
  toggleSidebar
})

type SidebarLayoutSlots = {
  default(props: { toggleSidebar: () => void }): any
  sidebar: any
}

const slots = defineSlots<SidebarLayoutSlots>()

/*const breakpoints = useBreakpoints(breakpointsTailwind)

const breakpoint = useCookie<string>('sidebar-breakpoint')

const currentBreakpoint = computed(() => breakpoints.active())

watch(currentBreakpoint, () => {
  breakpoint.value = currentBreakpoint.value
})*/
</script>

<template>
  <div class="h-screen">
    <SplitterGroup
      id="sidebar-layout"
      direction="horizontal"
      auto-save-id="mockline-sidebar"
      @layout="layout = $event"
    >
      <SplitterPanel
        id="sidebar-layout-sidebar"
        ref="sidebar"
        :min-size="props.minSize"
        :max-size="props.maxSize"
        :collapsed-size="props.collapsedSize"
        :default-size="layout[0]"
        collapsible
      >
        <slot name="sidebar" />
      </SplitterPanel>
      <!--      <SplitterResizeHandle
        id="sidebar-layout-resize-handle"
        class="w-1"
      />-->
      <SplitterPanel
        id="sidebar-layout-content"
        :min-size="50"
        :default-size="layout[1]"
        style="overflow-y: auto;"
      >
        <div id="app-main-content" class="h-[calc(100vh-var(--spacing)*2)] overflow-y-auto relative m-1 rounded-lg dark:bg-neutral-900 bg-white border dark:border-neutral-800 border-neutral-200 shadow-lg dark:shadow-xl">
          <slot name="default" :toggle-sidebar />
        </div>
      </SplitterPanel>
    </SplitterGroup>
  </div>
</template>
