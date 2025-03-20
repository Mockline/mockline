<script setup lang="ts">
import { ref } from 'vue'
import { useColorMode } from '@vueuse/core'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore included for compatibility with Nuxt playground

const mode = useColorMode()

const isCommandPaletteOpen = ref(false)

defineShortcuts({
  meta_k: () => isCommandPaletteOpen.value = true
})
</script>

<template>
  <MApp>
    <div class="h-screen w-screen overflow-hidden flex min-h-0 bg-(--ui-bg)">
      <div class="fixed top-15 lg:top-3 right-4 flex items-center gap-2">
        <MButton
          :icon="mode === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          :aria-label="`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`"
          @click="mode = mode === 'dark' ? 'light' : 'dark'"
        />
      </div>

      <div class="flex-1 flex flex-col items-center justify-around overflow-y-auto w-full py-14 px-4">
        <Suspense>
          <RouterView />
        </Suspense>
      </div>
    </div>
  </MApp>
</template>
