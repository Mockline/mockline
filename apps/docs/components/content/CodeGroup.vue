<script setup lang="ts">
import type { PropType } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  }
})

const slots = useSlots()

const selectedIndex = ref(0)
defineExpose({ selectedIndex })

function transformSlot(slot: any, index: number) {
  if (typeof slot.type === 'symbol') {
    return slot.children?.map(transformSlot)
  }

  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    icon: slot.props?.icon,
    component: slot
  }
}

const tabs = computed(() => slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [])

const selectedTab = computed(() => tabs.value.find((_, index) => index === selectedIndex.value))
</script>

<template>
  <div class="relative my-5 [&>div:last-child]:!static [&>div:last-child]:!my-0">
    <div class="bg-gray-2 flex items-center gap-1 overflow-hidden rounded-t-md p-2">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        tabindex="-1"
        :class="['text-gray-12 flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm focus:outline-none',
        selectedIndex === index ? 'bg-canvas-4' : 'hover:bg-canvas-3']"
        @click="selectedIndex = index"
      >
        <ProseCodeIcon :icon="tab.icon" :filename="tab.label" />
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <component :is="selectedTab?.component" :key="selectedIndex" hide-header />
  </div>
</template>
