<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const { version } = useRuntimeConfig().public
</script>

<template>
  <MSidebarLayout>
    <template #sidebar>
      <MSidebar class="p-2">
        <template #header>
          <FrameworkSelector />
        </template>
        <MContentNavigationTree v-if="navigation" :links="navigation" />
      </MSidebar>
    </template>
    <template #default="{ toggleSidebar }">
      <MHeader sticky class="dark:bg-neutral-900 bg-white pl-1 pt-1 pr-4">
        <MButton
          variant="ghost"
          color="neutral"
          size="lg"
          icon="lucide:panel-left"
          @click="toggleSidebar"
        />
        <div class="flex text-xs items-center gap-4">
          <NuxtLink class="flex items-center gap-2" to="/">
            <Icon name="custom:mockline" />
            <span class="font-semibold">Mockline</span>
          </NuxtLink>
          <span class=" text-gray-500 dark:text-gray-400">
            v{{ version }}
          </span>
          <div class="flex items-center justify-between">
            <MThemeToggle size="sm" />
          </div>
        </div>
      </MHeader>
      <MMain class="p-4">
        <slot />
      </MMain>
    </template>
  </MSidebarLayout>
</template>
