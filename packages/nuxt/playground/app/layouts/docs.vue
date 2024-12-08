<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const { framework, frameworks } = useSharedData()

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <div class="h-screen">
    <MSidebarLayout>
      <template #sidebar>
        <div class="p-4 flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <MIcon name="custom:mockline" />
            <span class="font-semibold">Mockline</span>
          </div>
          <div class="flex flex-col">
            <MButton
              v-for="_framework in frameworks"
              :key="_framework.value"
              class="mb-2"
              variant="link"
              :color="framework === _framework.value ? 'primary' : 'neutral'"
              @click="_framework.onSelect"
            >
              {{ _framework.label }}
            </MButton>
          </div>
          <MContentNavigationTree v-if="navigation" :links="navigation" />
          <MThemeToggle />
        </div>
      </template>
      <!--      <MHeader :height="16" sticky>
          <template #left>
            <NuxtLink to="/">
              <MIcon name="custom:mockline" />
            </NuxtLink>
          </template>
          <template #right>
            <ClientOnly>
              <MThemeToggle />
            </ClientOnly>
          </template>
        </MHeader>-->
      <MMain class="mt-1 mb-1 mr-1 p-4 rounded-lg dark:bg-neutral-900 bg-white">
        <slot />
      </MMain>
    </MSidebarLayout>
  </div>
</template>
