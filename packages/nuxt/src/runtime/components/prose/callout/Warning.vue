<script setup lang="ts">
import Callout from '../Callout.vue'
import { useAppConfig } from '#imports'

const appConfig = useAppConfig()
</script>

<template>
  <Callout color="warning" :icon="appConfig.mockline.icons.warning">
    <slot mdc-unwrap="p" />
  </Callout>
</template>
