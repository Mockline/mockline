<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <div>
    <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="mr-6"
      >
        {{ link.title }}
      </NuxtLink>
  </div>
</template>