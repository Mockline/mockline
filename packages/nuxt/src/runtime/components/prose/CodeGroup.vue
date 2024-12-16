<script setup lang="ts">
import { TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from 'reka-ui'
import { useSlots, computed, onMounted, watch } from 'vue'
import { type CodeGroupProps } from '@mockline/themes'
import { transformSlot } from '../../utils'
import CodeIcon from './CodeIcon.vue'
import { useComponent } from '#mockline/utils/useComponent'
import { useState } from '#imports'

const props = withDefaults(defineProps<CodeGroupProps>(), {
  defaultValue: '0'
})

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('proseCodeGroup', componentProps)

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
  <TabsRoot v-model="model" :default-value :class="getClasses('root', props.class)">
    <TabsList :class="getClasses('list')">
      <TabsIndicator :class="getClasses('indicator')" />

      <TabsTrigger v-for="(item, index) of items" :key="index" :value="String(index)" :class="getClasses('trigger')">
        <CodeIcon :icon="item.icon" :filename="item.label" :class="getClasses('triggerIcon')" />

        <span :class="getClasses('triggerLabel')">{{ item.label }}</span>
      </TabsTrigger>
    </TabsList>

    <TabsContent v-for="(item, index) of items" :key="index" :value="String(index)" as-child>
      <component :is="item.component" hide-header tabindex="-1" />
    </TabsContent>
  </TabsRoot>
</template>
