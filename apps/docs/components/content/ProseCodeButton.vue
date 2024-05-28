<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const config = {
  icon: {
    copy: 'i-heroicons-clipboard-document',
    copied: 'i-heroicons-clipboard-document-check'
  }
}

const icon = ref(config.icon.copy)

function copy() {
  useClipboard({
    toCopy: props.code,
    callback() {
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
