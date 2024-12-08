<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { tv } from 'tailwind-variants'
import CodeIcon from './CodeIcon.vue'
import appConfig from '#build/app.config'

const prosePre = tv({
  slots: {
    root: 'relative my-5 group',
    header: 'flex items-center gap-1.5 border border-[var(--ui-border-muted)] bg-[var(--ui-bg)] border-b-0 relative rounded-t-[calc(var(--ui-radius)*1.5)] px-4 py-3',
    filename: 'text-[var(--ui-text)] text-sm/6',
    icon: 'size-4 shrink-0',
    copy: 'absolute top-[11px] right-[11px] opacity-0 group-hover:opacity-100 transition',
    base: 'group font-mono text-sm/6 border border-[var(--ui-border-muted)] bg-[var(--ui-bg-muted)] rounded-[calc(var(--ui-radius)*1.5)] px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto'
  },
  variants: {
    filename: {
      true: {
        root: '[&>pre]:rounded-t-none [&>pre]:my-0 my-5'
      }
    }
  }
})

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

const ui = prosePre()
</script>

<template>
  <div :class="ui.root({ filename: !!filename })">
    <div
      v-if="filename && !hideHeader"
      :class="ui.header()"
    >
      <CodeIcon :icon :filename :class="ui.icon()" />

      <span :class="ui.filename">{{ filename }}</span>
    </div>

    <MButton
      :icon="copied ? appConfig.mockline.icons.copyCheck : appConfig.mockline.icons.copy"
      color="neutral"
      variant="outline"
      size="sm"
      aria-label="Copy code to clipboard"
      :class="ui.copy()"
      tabindex="-1"
      @click="copy"
    />

    <pre :class="ui.base({ class: [props.class] })" v-bind="$attrs"><slot /></pre>
  </div>
</template>

<style>
.shiki span.line{display:block}.shiki span.line.highlight{margin:0 -16px;padding:0 16px;@apply bg-[var(--ui-bg-accented)]/50}
</style>
