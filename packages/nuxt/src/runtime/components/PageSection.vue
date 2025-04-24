<script setup lang="ts">
import { Primitive } from 'reka-ui'
import type { PageSectionProps, PageSectionSlots } from '@mockline/themes'
import { computed } from 'vue'
import { useComponent } from '../utils'

const props = defineProps<PageSectionProps>()
const slots = defineSlots<PageSectionSlots>()

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('pageSectionTv', componentProps)

</script>

<template>
  <Primitive :as :data-orientation="align" :class="getClasses('root', props.class)">
    <div :class="getClasses('container')">
      <div v-if="(icon || !!slots.leading) || (headline || !!slots.headline) || (title || !!slots.title) || (description || !!slots.description)" :class="getClasses('wrapper')">
        <div v-if="icon" :class="getClasses('leading')">
          <slot name="leading">
            <Icon v-if="(icon || !!slots.leading)" :name="icon" :class="getClasses('leadingIcon')" />
          </slot>
        </div>

        <div v-if="(headline || !!slots.headline)" :class="getClasses('headline')">
          <slot name="headline">
            {{ headline }}
          </slot>
        </div>

        <h2 v-if="(title || !!slots.title)" :class="getClasses('title')">
          <slot name="title">
            {{ title }}
          </slot>
        </h2>

        <div v-if="(description || !!slots.description)" :class="getClasses('description')">
          <slot name="description">
            {{ description }}
          </slot>
        </div>
      </div>
      <slot v-if="!!slots.default" />
    </div>
  </Primitive>
</template>

