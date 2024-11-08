<script setup lang="ts">
import { useSlots, computed } from 'vue'

defineOptions({
  inheritAttrs: false
})

type CodeGroupProps = {
  class?: any
}

const props = defineProps<CodeGroupProps>()

const slots = useSlots()

const selectedIndex = ref(0)
defineExpose({ selectedIndex })

function transformSlot(slot: any, index: number): any {
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
    <div class="flex items-center gap-1 overflow-hidden rounded-t-md bg-neutral-100 p-2 dark:bg-neutral-800">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        tabindex="-1"
        :class="['flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-neutral-950 focus:outline-none dark:text-neutral-100',
                 selectedIndex === index ? 'bg-neutral-200 dark:bg-neutral-700' : 'hover:bg-neutral-300 dark:hover:bg-neutral-700']"
        @click="selectedIndex = index"
      >
        <CodeIcon :icon="tab.icon" :filename="tab.label" />
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <component :is="selectedTab?.component" :key="selectedIndex" hide-header />
  </div>
</template>
