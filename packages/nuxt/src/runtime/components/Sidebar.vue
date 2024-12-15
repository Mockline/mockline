<script setup lang="ts">
import type { SidebarProps, SidebarSlots } from '@mockline/themes'
import { computed, ref } from 'vue'
import { useComponent } from '#mockline/utils/useComponent'

const props = withDefaults(defineProps<SidebarProps>(), {
  minSize: 15,
  maxSize: 15,
  collapsedSize: 0,
  defaultSize: 20,
})

const slots = defineSlots<SidebarSlots>()

const collapsed = ref(false)

const sidebarRef = ref<HTMLElement | null>(null)

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('sidebar', componentProps)
</script>

<template>
  <nav ref="sidebarRef" :class="getClasses('root', props.class)">
    <div class="flex flex-col gap-4">
      <div>
        <slot name="header" />
      </div>
      <div>
        <slot name="default" />
      </div>
    </div>
    <div>
      <slot name="footer" />
    </div>
  </nav>
</template>

<style scoped>

</style>
