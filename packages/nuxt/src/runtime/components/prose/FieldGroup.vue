<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { type FieldGroupProps } from '@mockline/themes'
import { useComponent } from '../../utils'

const props = defineProps<FieldGroupProps>()

const { getClasses } = useComponent('proseFieldGroup')
</script>

<template>
  <Primitive as="div" :class="getClasses('default', props.class)">
    <slot />
  </Primitive>
</template>
