<script setup lang="ts">
import Callout from '../Callout.vue'
import { useAppConfig } from '#imports'

const appConfig = useAppConfig()
</script>

<template>
  <Callout color="danger" :icon="appConfig.mockline.icons.danger">
    <slot mdc-unwrap="p" />
  </Callout>
</template>
