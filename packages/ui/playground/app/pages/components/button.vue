<script setup lang="ts">
import { upperFirst } from 'scule'
import theme from '#build/ui/button'

const sizes = Object.keys(theme.variants.size) as Array<keyof typeof theme.variants.size>
const variants = Object.keys(theme.variants.variant) as Array<keyof typeof theme.variants.variant>

function onClick() {
  return new Promise<void>(res => setTimeout(res, 5000))
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <MButton class="font-bold">
        Button
      </MButton>
    </div>
    <div class="flex items-center gap-2">
      <MButton disabled>
        Disabled
      </MButton>

      <MButton to="#" disabled>
        Disabled Link
      </MButton>
    </div>
    <div class="flex items-center gap-2">
      <MButton loading-auto @click="onClick">
        Loading
      </MButton>
    </div>
    <div class="flex items-center gap-2">
      <MButton loading trailing>
        Loading
      </MButton>
    </div>
    <div class="flex items-center gap-2">
      <MButton v-for="variant in variants" :key="variant" icon="i-heroicons-rocket-launch" :label="upperFirst(variant)" :variant="variant" />
    </div>
    <div class="flex items-center gap-2">
      <MButton
        v-for="variant in variants"
        :key="variant"
        icon="i-heroicons-rocket-launch"
        :label="upperFirst(variant)"
        :variant="variant"
        color="red"
      />
    </div>
    <div class="flex items-center gap-2 ml-[-129px]">
      <MButton v-for="size in sizes" :key="size" label="Button" :size="size" />
    </div>
    <div class="flex items-center gap-2 ml-[-171px]">
      <MButton v-for="size in sizes" :key="size" icon="i-heroicons-rocket-launch" label="Button" :size="size" />
    </div>
    <div class="flex items-center gap-2 ml-[-159px]">
      <MButton
        v-for="size in sizes"
        :key="size"
        icon="i-heroicons-rocket-launch"
        label="Square"
        square
        :size="size"
      />
    </div>
    <div class="flex items-center gap-2 ml-[-68px]">
      <MButton v-for="size in sizes" :key="size" icon="i-heroicons-rocket-launch" :size="size" />
    </div>
    <div class="flex items-center gap-2">
      <MButton icon="i-heroicons-rocket-launch" trailing-icon="i-heroicons-chevron-down-20-solid" label="Block" block />
    </div>
    <div class="flex items-center gap-2">
      <MButton icon="i-heroicons-cloud-arrow-down" label="Button" class="group" :ui="{ leadingIcon: 'group-hover:animate-pulse' }" />
    </div>
  </div>
</template>
