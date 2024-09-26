<script setup lang="ts">
import { splitByCase, upperFirst } from 'scule'

const appConfig = useAppConfig()
const router = useRouter()

const components = ['button',]

const items = components.map(component => ({ label: upperName(component), to: `/components/${component}` }))

function upperName(name: string) {
  return splitByCase(name).map(p => upperFirst(p)).join('')
}

const isCommandPaletteOpen = ref(false)

function onSelect(item: any) {
  router.push(item.to)
}

defineShortcuts({
  meta_k: () => console.log('meta_k'),
})
</script>

<template>
  <div class="flex h-screen min-h-0 w-screen overflow-hidden bg-white dark:bg-gray-900">
    <div>
      <NuxtLink v-for="item in items" :key="item.label" :to="item.to">
        {{ item.label }}
      </NuxtLink>
    </div>
    <div class="flex w-full flex-1 flex-col items-center justify-around overflow-y-auto px-4 py-12">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
@import "tailwindcss";
@import "@mockline/ui";

@theme {
  --font-family-sans: 'Public Sans', sans-serif;

  --color-green-50: #EFFDF5;
  --color-green-100: #D9FBE8;
  --color-green-200: #B3F5D1;
  --color-green-300: #75EDAE;
  --color-green-400: #00DC82;
  --color-green-500: #00C16A;
  --color-green-600: #00A155;
  --color-green-700: #007F45;
  --color-green-800: #016538;
  --color-green-900: #0A5331;
  --color-green-950: #052E16;
}
</style>
