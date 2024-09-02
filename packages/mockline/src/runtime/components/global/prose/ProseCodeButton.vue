<script setup lang="ts">
import { toast } from 'vue-sonner'
import { useClipboard } from '../../../composables/useClipboard'

const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const config = {
  icon: {
    copy: 'heroicons:clipboard-document',
    copied: 'heroicons:clipboard-document-check'
  }
}

const icon = ref(config.icon.copy)

function copy(): void {
  useClipboard({
    toCopy: props.code,
    callback() {
      toast.success('Copied to clipboard!')
      icon.value = config.icon.copied
      setTimeout(() => {
        icon.value = config.icon.copy
      }, 2000)
    }
  })
}
</script>

<template>
  <div class="absolute right-2.5 top-2.5">
    <MButton
      variant="link"
      size="md"
      color="gray"
      :icon
      aria-label="Copy code to clipboard"
      @click="copy"
    />
  </div>
</template>
