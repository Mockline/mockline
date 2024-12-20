<script setup lang="ts">
import { input } from '@mockline/themes'

const sizes = Object.keys(input.variants.size) as Array<keyof typeof input.variants.size>
const inputText = ref('')
</script>

<template>
  <MPageBody>
    <div>
      <ProseH3>
        Usage (primary)
      </ProseH3>
      <div class="flex flex-wrap gap-4">
        <MInput
          v-model="inputText"
          placeholder="placeholder"
          disabled
        />
      </div>
    </div>
  </MPageBody>
</template>

<style scoped></style>

