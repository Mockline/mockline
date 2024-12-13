<script setup lang="ts">
import { computed } from 'vue'
import { type SwitchProps, type SwitchSlots } from '@mockline/themes'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { useComponent } from '../utils/useComponent'
import { useComponentIcons, type UseComponentIconsProps } from '#mockline/composables/useComponentIcons'
import appConfig from '#build/app.config'


const props = defineProps<SwitchProps & UseComponentIconsProps>()
const slots = defineSlots<SwitchSlots>()

const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)

const state = defineModel({
  type: Boolean,
})

const componentProps = computed(() => {
  return {
    ...props,
    transitions: appConfig.mockline.transitions
  }
})

const { getClasses } = useComponent('switchTv', componentProps)
</script>

<template>
  <div :class="getClasses('root')">
    <SwitchRoot
      v-model="state"
      :class="getClasses('base')"
      :disabled="loading || disabled"
    >
      <SwitchThumb
        :class="getClasses('indicator', props.indicatorClass)"
      >
        <MIcon
          v-if="loading"
          :name="loadingIcon || appConfig.mockline.icons.loading"
          :class="getClasses('loadingIcon')"
        />
        <template v-else>
          <MIcon v-if="checkedIcon && state" :name="checkedIcon" :class="getClasses('icon')" />
          <MIcon v-if="uncheckedIcon && !state" :name="uncheckedIcon" :class="getClasses('icon')" />
        </template>
      </SwitchThumb>
    </SwitchRoot>
    <span
      v-if="label"
      :class="getClasses
        ('label', labelClass)"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </span>
  </div>
</template>
