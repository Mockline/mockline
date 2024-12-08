<script setup lang="ts">
import { TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from 'reka-ui'
import { useSlots, computed, onMounted, watch } from 'vue'
import { proseCodeGroup, type CodeGroupProps } from '@mockline/themes'
import { transformSlot } from '../../utils'
import CodeIcon from './CodeIcon.vue'
import { useState } from '#imports'

const props = withDefaults(defineProps<CodeGroupProps>(), {
  defaultValue: '0'
})

const codeGroup = proseCodeGroup()

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

    <TabsContent v-for="(item, index) of items" :key="index" :value="String(index)" as-child>
      <component :is="item.component" hide-header tabindex="-1" />
    </TabsContent>
  </TabsRoot>
</template>
