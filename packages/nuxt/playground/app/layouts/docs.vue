<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const { framework, frameworks } = useSharedData()

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <MSidebarLayout>
    <template #sidebar>
      <div class="p-4 h-full flex flex-col justify-between gap-4">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <MIcon name="custom:mockline" />
            <span class="text-sm font-semibold">Mockline</span>
          </div>
          <div class="flex items-center gap-2">
            <MButton
              v-for="_framework in frameworks"
              :key="_framework.value"
              variant="link"
              :color="framework === _framework.value ? 'primary' : 'neutral'"
              @click="_framework.onSelect"
            >
              {{ _framework.label }}
            </MButton>
          </div>
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
    <template #default="{ toggleSidebar }">
      <MMain>
        <MButton
          class="absolute top-2 left-2"
          variant="ghost"
          color="neutral"
          size="lg"
          icon="lucide:panel-left"
          @click="toggleSidebar"
        />
        <slot />
      </MMain>
    </template>
  </MSidebarLayout>
</template>
