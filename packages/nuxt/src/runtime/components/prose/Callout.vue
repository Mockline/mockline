<script setup lang="ts">
import { computed } from 'vue'
import type { ProseCalloutProps, CalloutSlots } from '@mockline/themes'
import { useComponent } from '#mockline/utils/useComponent'
import appConfig from '#build/app.config'

const props = defineProps<ProseCalloutProps>()
const slots = defineSlots<CalloutSlots>()

const componentProps = computed(() => {
  return {
    ...props,
    link: !!props.to
  }
})

const { getClasses } = useComponent('proseCallout', componentProps)

const target = computed(() => props.target || (!!props.to && true && props.to.startsWith('http') ? '_blank' : undefined))
</script>

<template>
  <div :class="getClasses('base', props.class)">
    <NuxtLink v-if="to" :to :target class="focus:outline-none" tabindex="-1">
      <span class="absolute inset-0" aria-hidden="true" />
    </NuxtLink>

    <MIcon v-if="icon" :name="icon" :class="getClasses('icon')" />
    <MIcon v-if="!!to && target === '_blank'" :name="appConfig.mockline.icons.external" :class="getClasses('externalIcon')" />

    <slot mdc-unwrap="p" />
  </div>
</template>
