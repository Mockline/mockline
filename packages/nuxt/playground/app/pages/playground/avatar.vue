<script setup lang="ts">
import { avatar } from '@mockline/themes'

const sizes = Object.keys(avatar.variants.size) as Array<keyof typeof avatar.variants.size>

</script>


<template>
  <MPageBody>
    <ProseH3>
      Avatar
    </ProseH3>
    <div class="flex gap-4">
      <MAvatar
        src="https://avatars.githubusercontent.com/u/72015679?v=4"
        alt="Avatar"
      />
      <MAvatar
        src=""
        alt="Johann Cavallucci"
        size="md"
      />
    </div>
    <ProseH3>
      Sizes
    </ProseH3>

    <div class="flex gap-4">
      <div v-for="size in sizes" :key="size" class="flex items-center gap-2">
        <MAvatar
          :key="size"
          :size
          src="https://avatars.githubusercontent.com/u/72015679?v=4"
          alt="Avatar"
        />
      </div>
    </div>
  </MPageBody>
</template>

<style scoped></style>

