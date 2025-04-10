<script setup lang="ts">
import { Primitive } from 'reka-ui'
import type { FieldProps, FieldSlots } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'

const props = defineProps<FieldProps>()
const slots = defineSlots<FieldSlots>()

const { getClasses } = useComponent('proseField')
</script>

<template>
  <Primitive as="div" :class="getClasses('root', props.class)">
    <div :class="getClasses('container', props.class)">
      <span v-if="name" :class="getClasses('name', props.class)">
        {{ name }}
      </span>

      <div :class="getClasses('wrapper', props.class)">
        <span v-if="type" :class="getClasses('type', props.class)">
          {{ type }}
        </span>

        <span v-if="required" :class="getClasses('required', props.class)">
          required
        </span>
      </div>
    </div>

    <p v-if="!!slots.default || description" :class="getClasses('description', props.class)">
      <slot mdc-unwrap="p">
        {{ description }}
      </slot>
    </p>
  </Primitive>
</template>
