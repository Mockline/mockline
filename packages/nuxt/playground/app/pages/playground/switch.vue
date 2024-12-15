<script setup lang="ts">
import { switchTv } from '@mockline/themes'

const sizes = Object.keys(switchTv.variants.size) as Array<keyof typeof switchTv.variants.size>
const variants = Object.keys(switchTv.variants.variant) as Array<keyof typeof switchTv.variants.variant>
const state = ref(false)
</script>

<template>
  <MPageBody>
    <ProseH3>
      Variants
    </ProseH3>
    <div class="flex flex-wrap gap-4">
      <MSwitch
        v-model="state"
        variant="solid"
        label="Disabled"
        indicator-class=""
        disabled
      />
      <MSwitch
        v-model="state"
        label="Loading"
        indicator-class=""
        variant="solid"
        loading
        unchecked-icon="lucide:x"
        checked-icon="lucide:check"
      />
      <MSwitch
        v-model="state"
        variant="solid"
        label="Normal"
        indicator-class=""
        unchecked-icon="lucide:x"
        checked-icon="lucide:check"
      />
      <MSwitch
        v-model="state"
        variant="solid"
        label="Required"
        indicator-class=""
        required
      />
    </div>
    <ProseH3>
      Sizes
    </ProseH3>
    <div class="flex gap-4">
      <div v-for="size in sizes" :key="size" class="flex items-center gap-2">
        <MSwitch
          :key="size"
          v-model="state"
          :label="size"
          :size
          unchecked-icon="lucide:x"
          checked-icon="lucide:check"
          variant="solid"
        />
      </div>
    </div>
  </MPageBody>
</template>
