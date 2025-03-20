<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { isEqual, diff } from 'ohash/utils'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { hasProtocol } from 'ufo'
import { RouterLink } from 'vue-router'
import type { LinkProps, LinkSlots } from '@mockline/themes'
import { type UseComponentIconsProps, useRoute } from '#imports'
import LinkBase from '#mockline/components/LinkBase.vue'

const props = defineProps<LinkProps & UseComponentIconsProps>()
const slots = defineSlots<LinkSlots>()

// Check if vue-router is available by checking for the injection key
const hasRouter = computed(() => {
  const app = getCurrentInstance()?.appContext.app
  return !!(app?.config?.globalProperties?.$router)
})

// Only try to get route if router exists
const route = computed(() => {
  if (!hasRouter.value) return null
  try {
    return useRoute()
  } catch {
    return null
  }
})

const routerLinkProps = useForwardProps(reactiveOmit(props, 'as', 'type', 'disabled', 'active', 'exact', 'exactQuery', 'exactHash', 'activeClass', 'inactiveClass', 'to', 'raw', 'class'))

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

const isExternal = computed(() => {
  if (!props.to) return false
  return typeof props.to === 'string' && hasProtocol(props.to, { acceptRelative: true })
})

function isLinkActive({ route: linkRoute, isActive, isExactActive }: any) {
  if (props.active !== undefined) {
    return props.active
  }

  if (!props.to || !route.value) {
    return false
  }

  if (props.exactQuery === 'partial') {
    if (!isPartiallyEqual(linkRoute.query, route.value.query)) return false
  } else if (props.exactQuery) {
    if (!isEqual(linkRoute.query, route.value.query)) return false
  }

  if (props.exactHash && linkRoute.hash !== route.value.hash) {
    return false
  }

  if (props.exact && isExactActive) {
    return true
  }

  return !!(!props.exact && isActive)
}
</script>

<template>
  <template v-if="hasRouter && !isExternal">
    <RouterLink v-slot="{ href, navigate, route: linkRoute, isActive, isExactActive }" v-bind="routerLinkProps" :to="to || '#'" custom>
      <template v-if="custom">
        <slot
          v-bind="{
            ...$attrs,
            as,
            type,
            disabled,
            href: to ? href : undefined,
            navigate,
            active: isLinkActive({ route: linkRoute, isActive, isExactActive })
          }"
        />
      </template>
      <LinkBase
        v-else
        v-bind="{
          ...$attrs,
          as,
          type,
          disabled,
          href: to ? href : undefined,
          navigate
        }"
      >
        <slot :active="isLinkActive({ route: linkRoute, isActive, isExactActive })" />
      </LinkBase>
    </RouterLink>
  </template>

  <template v-else>
    <template v-if="custom">
      <slot
        v-bind="{
          ...$attrs,
          as,
          type,
          disabled,
          href: to,
          target: isExternal ? '_blank' : undefined,
          active: false
        }"
      />
    </template>
    <LinkBase
      v-else
      v-bind="{
        ...$attrs,
        as,
        type,
        disabled,
        href: (to as string),
        target: isExternal ? '_blank' : undefined
      }"
      :is-external
    >
      <slot :active="false" />
    </LinkBase>
  </template>
</template>
