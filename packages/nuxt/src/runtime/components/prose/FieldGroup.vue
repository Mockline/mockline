<script setup lang="ts">
import { type FieldGroupProps } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = defineProps<FieldGroupProps>()

const { getClasses } = useComponent('proseFieldGroup')
</script>

<template>
  <div :class="getClasses('default', props.class)">
    <slot />
  </div>
</template>
