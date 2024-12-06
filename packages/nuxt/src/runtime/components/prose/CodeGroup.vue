<script setup lang="ts">
import { TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from 'reka-ui'
import { useSlots, computed, onMounted, watch } from 'vue'
import { tv } from 'tailwind-variants'
import { transformSlot } from '../../utils'
import CodeIcon from './CodeIcon.vue'
import { useState } from '#imports'

const theme = tv({
  slots: {
    root: 'relative group [&>div:not(:first-child)]:!my-0 [&>div:not(:first-child)]:!static my-5',
    list: 'relative flex items-center gap-1 border border-[var(--ui-border-muted)] bg-[var(--ui-bg)] border-b-0 rounded-t-[calc(var(--ui-radius)*1.5)] overflow-x-auto p-2',
    indicator: 'absolute left-0 inset-y-2 w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)] transition-[translate,width] duration-200 bg-[var(--ui-bg-elevated)] rounded-[calc(var(--ui-radius)*1.5)] shadow-xs',
    trigger: ['relative inline-flex items-center gap-1.5 text-[var(--ui-text)] data-[state=active]:text-[var(--ui-text-highlighted)] hover:bg-[var(--ui-bg-elevated)]/50 px-2 py-1.5 text-sm rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)] focus:outline-none'],
    triggerIcon: 'size-4 shrink-0',
    triggerLabel: 'truncate'
  }
})

type CodeGroupProps = {
  defaultValue?: string
  class?: any
  sync?: string
}

const props = withDefaults(defineProps<CodeGroupProps>(), {
  defaultValue: '0'
})

const codeGroup = theme()

const slots = useSlots()

const model = defineModel<string>()

const items = computed(() => slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [])

onMounted(() => {
  if (props.sync) {
    const syncKey = `code-group-${props.sync}`
    const syncValue = useState<string>(syncKey, () => localStorage.getItem(syncKey) as string)

    watch(syncValue, () => {
      if (!syncValue.value) return

      model.value = syncValue.value
    }, { immediate: true })

    watch(model, () => {
      if (!model.value) return

      syncValue.value = model.value
      localStorage.setItem(syncKey, model.value)
    })
  }
})
</script>

<template>
  <TabsRoot v-model="model" :default-value :class="codeGroup.root({ class: props.class })">
    <TabsList :class="codeGroup.list()">
      <TabsIndicator :class="codeGroup.indicator()" />

      <TabsTrigger v-for="(item, index) of items" :key="index" :value="String(index)" :class="codeGroup.trigger()">
        <CodeIcon :icon="item.icon" :filename="item.label" :class="codeGroup.triggerIcon()" />

        <span :class="codeGroup.triggerLabel()">{{ item.label }}</span>
      </TabsTrigger>
    </TabsList>

    <TabsContent v-for="(item, index) of items" :key="index" :value="String(index)" force-mount as-child>
      <component :is="item.component" hide-header />
    </TabsContent>
  </TabsRoot>
</template>
