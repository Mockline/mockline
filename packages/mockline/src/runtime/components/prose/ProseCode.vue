<script setup lang="ts">
type ProseCodeProps = {
  code: string
  icon?: string
  language?: string
  hideHeader?: boolean
  filename?: string
  highlights?: number[]
  meta?: string
}

const props = defineProps<ProseCodeProps>()
</script>

<template>
  <div class="relative my-5 group" :class="filename ? '[&>pre]:rounded-t-none [&>pre]:my-0 my-5' : ''">
    <div v-if="filename && !hideHeader" class="flex items-center gap-1.5 border border-neutral-elevated bg-neutral-elevated border-b-0 relative rounded-t-md px-4 py-3">
      <CodeIcon :icon="icon" :filename="filename" class="size-4 shrink-0" />

      <span class="text-sm/6">{{ filename }}</span>
    </div>

    <CodeButton :code />

    <slot />
  </div>
</template>

