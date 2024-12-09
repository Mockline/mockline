<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import FrameworkSelector from '~/components/FrameworkSelector.vue'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const { version } = useRuntimeConfig().public
</script>

<template>
  <MSidebarLayout>
    <template #sidebar>
      <div class="p-4 h-full flex flex-col justify-between gap-4">
        <div class="flex flex-col gap-4">
          <FrameworkSelector />
          <MContentNavigationTree v-if="navigation" :links="navigation" />
        </div>
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-2">
            <MIcon name="lucide:home" size="15px" />
            <span class="text-sm font-semibold">Home</span>
          </NuxtLink>
          <MThemeToggle />
        </div>
      </div>
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
          <div class="flex items-center gap-2">
            <MIcon name="custom:mockline" />
            <span class="font-semibold">Mockline</span>
          </div>
          <span class=" text-gray-500 dark:text-gray-400">
            v{{ version }}
          </span>
        </div>
      </MHeader>
      <MMain>
        <slot />
      </MMain>
    </template>
  </MSidebarLayout>
</template>
