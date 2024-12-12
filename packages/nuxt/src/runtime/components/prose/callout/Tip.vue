<script setup lang="ts">
import Callout from '../Callout.vue'
import { useAppConfig } from '#imports'

const appConfig = useAppConfig()
</script>

<template>
  <Callout color="success" :icon="appConfig.mockline.icons.tip">
    <slot mdc-unwrap="p" />
  </Callout>
</template>
