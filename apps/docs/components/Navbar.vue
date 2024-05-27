<script setup lang="ts">
const { navigation } = useContent()
console.log(navigation.value)

const items = [
  {
    title: 'Home',
    path: '/',
    slot: 'home'
  },
  {
    title: 'Docs',
    path: '/docs',
  },
]
</script>

<template>
  <MNavMenu :items class="absolute top-4 z-50" color="white">
    <template #home>
      <div class="flex h-40 w-96 items-center justify-center">
        Test
      </div>
    </template>
    <template #leading>
      <NuxtLink class="font-instrument italic" to="/">
      Mockline
      </NuxtLink>
    </template>
    <template #trailing>
      <MButton label="Waitlist" size="sm" />
    </template>
  </MNavMenu>
</template>

<style scoped>

</style>
