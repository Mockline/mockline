<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { prosePre, type ProsePreProps } from '@mockline/themes'
import CodeIcon from './CodeIcon.vue'
import appConfig from '#build/app.config'

const props = defineProps<ProsePreProps>()

const clipboard = useClipboard()

const copied = ref(false)

function copy(): void {
  clipboard.copy(props.code || '')

  copied.value = true

  toast.success('Copied to clipboard')

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

      <span :class="ui.filename()">{{ filename }}</span>
    </div>

    <MButton
      :icon="copied ? appConfig.mockline.icons.copyCheck : appConfig.mockline.icons.copy"
      :color="copied ? 'danger' : 'neutral'"
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
