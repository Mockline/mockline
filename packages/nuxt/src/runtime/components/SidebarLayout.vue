<script setup lang="ts">
import { SplitterGroup, SplitterPanel } from 'reka-ui'
import { ref } from 'vue'
import { useCookie } from '#imports'
import ContentArea from '#mockline/components/ContentArea.vue'

type SidebarLayoutProps = {
  minSize?: number
  maxSize?: number
  collapsedSize?: number
  defaultSize?: number
}

const props = withDefaults(defineProps<SidebarLayoutProps>(), {
  minSize: 20,
  maxSize: 20,
  collapsedSize: 0,
  defaultSize: 20,
})

const layout = useCookie<number[]>('splitter:layout', {
  default: () => [props.defaultSize, 80],
})

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
        class="max-sm:hidden"
      >
        <slot name="sidebar" />
      </SplitterPanel>
      <SplitterPanel
        id="sidebar-layout-content"
        :min-size="50"
        :default-size="layout[1]"
        style="overflow-y: auto;"
      >
        <ContentArea>
          <slot name="default" :toggle-sidebar />
        </ContentArea>
      </SplitterPanel>
    </SplitterGroup>
  </div>
</template>
