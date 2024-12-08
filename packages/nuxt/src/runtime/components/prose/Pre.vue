<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import CodeIcon from './CodeIcon.vue'
import appConfig from '#build/app.config'

const props = defineProps<{
  icon?: string
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  hideHeader?: boolean
  meta?: string
  class?: any
}>()

const clipboard = useClipboard()

const copied = ref(false)

function copy(): void {
  clipboard.copy(props.code || '')

  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="relative my-5 group" :class="{ '[&>pre]:rounded-t-none [&>pre]:my-0': filename }">
    <div
      v-if="filename && !hideHeader"
      class="flex items-center gap-1.5 border border-[var(--ui-border-muted)] bg-[var(--ui-bg)] border-b-0 relative rounded-t-[calc(var(--ui-radius)*1.5)] px-4 py-3"
    >
      <CodeIcon :icon :filename class="size-4 shrink-0" />

      <span class="text-[var(--ui-text)] text-sm/6">{{ filename }}</span>
    </div>

    <MButton
      :icon="copied ? appConfig.mockline.icons.copyCheck : appConfig.mockline.icons.copy"
      color="neutral"
      variant="outline"
      size="sm"
      aria-label="Copy code to clipboard"
      class="absolute top-[11px] right-[11px] opacity-0 group-hover:opacity-100 transition"
      tabindex="-1"
      @click="copy"
    />

    <pre
      :class="props.class"
      class="group font-mono h-fit text-sm/6 border border-[var(--ui-border-muted)] bg-[var(--ui-bg-muted)] rounded-[calc(var(--ui-radius)*1.5)] px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto"
      v-bind="$attrs"
    >
      <slot />
    </pre>
  </div>
</template>

<style>
.shiki span.line{display:block}.shiki span.line.highlight{margin:0 -16px;padding:0 16px;@apply bg-[var(--ui-bg-accented)]/50}
</style>
