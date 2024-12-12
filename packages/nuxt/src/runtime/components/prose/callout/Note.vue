<script setup lang="ts">
import Callout from '../Callout.vue'
import { useAppConfig } from '#imports'

const appConfig = useAppConfig()
</script>

<template>
  <Callout color="info" :icon="appConfig.mockline.icons.note">
    <slot mdc-unwrap="p" />
  </Callout>
</template>
