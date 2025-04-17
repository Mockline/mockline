<script setup lang="ts">
import { computed } from 'vue'
import { isEqual, diff } from 'ohash/utils'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import type { LinkProps, LinkSlots } from '@mockline/themes'
import type { UseComponentIconsProps } from '../composables/useComponentIcons'
import ULinkBase from './LinkBase.vue'
import { useRoute } from '#imports'
import { useComponent } from '#mockline/utils'

const props = defineProps<LinkProps & UseComponentIconsProps>()
const slots = defineSlots<LinkSlots>()

const route = useRoute()
const nuxtLinkProps = useForwardProps(reactiveOmit(props, 'as', 'type', 'disabled', 'active', 'exact', 'exactQuery', 'exactHash', 'activeClass', 'inactiveClass', 'raw', 'class'))

function isPartiallyEqual(item1: any, item2: any) {
  const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
    if (q.type === 'added') {
      filtered.add(q.key)
    }
    return filtered
  }, new Set<string>())

  const item1Filtered = Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key)))
  const item2Filtered = Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key)))

  return isEqual(item1Filtered, item2Filtered)
}

function isLinkActive({ route: linkRoute, isActive, isExactActive }: any) {
  if (props.active !== undefined) {
    return props.active
  }

  if (props.exactQuery === 'partial') {
    if (!isPartiallyEqual(linkRoute.query, route.query)) return false
  } else if (props.exactQuery) {
    if (!isEqual(linkRoute.query, route.query)) return false
  }

  if (props.exactHash && linkRoute.hash !== route.hash) {
    return false
  }

  if (props.exact && isExactActive) {
    return true
  }

  return !!(!props.exact && isActive)
}

const componentProps = computed(() => {
  return {
    ...props,
  }
})

const { getClasses } = useComponent('link', componentProps)
</script>

<template>
  <NuxtLink v-slot="{ href, navigate, route: linkRoute, rel, target, isExternal, isActive, isExactActive }" v-bind="nuxtLinkProps" custom>
    <template v-if="custom">
      <slot
        v-bind="{
          ...$attrs,
          as,
          type,
          disabled,
          href,
          navigate,
          rel,
          target,
          isExternal,
          active: isLinkActive({ route: linkRoute, isActive, isExactActive })
        }"
      />
    </template>
    <ULinkBase
      v-else
      v-bind="{
        ...$attrs,
        as,
        type,
        disabled,
        href,
        navigate,
        rel,
        target,
        isExternal
      }"
      :class="getClasses('default', props.class)"
    >
      <slot :active="isLinkActive({ route: linkRoute, isActive, isExactActive })" />
    </ULinkBase>
  </NuxtLink>
</template>
