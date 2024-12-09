<script setup lang="ts">
import { ref } from 'vue'

type SidebarProps = {
  minSize?: number
  maxSize?: number
  collapsedSize?: number
  defaultSize?: number
}

const props = withDefaults(defineProps<SidebarProps>(), {
  minSize: 15,
  maxSize: 15,
  collapsedSize: 0,
  defaultSize: 20,
})

type SidebarSlots = {
  header: any
  default: any
  footer: any
}

const slots = defineSlots<SidebarSlots>()

const collapsed = ref(false)

const sidebarRef = ref<HTMLElement | null>(null)
</script>

<template>
  <nav ref="sidebarRef" class="flex flex-col h-full justify-between">
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
