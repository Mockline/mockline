<script lang="ts" setup>
const navigation = [
  {
    title: 'Home',
    _path: '/'
  }
]
</script>

<template>
  <div>
    <NuxtLink
      v-for="link of navigation"
      :key="link._path"
      :to="link._path"
    >
      {{ link.title }}
    </NuxtLink>
  </div>
</template>
