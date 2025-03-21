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
      <MAvatar
        src=""
        alt="Johann Cavallucci"
        icon="lucide:image"
        size="md"
      />
      <MAvatar
        text="moi"
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

    <ProseH3>
      Group
    </ProseH3>
    <MAvatarGroup size="md">
      <MAvatar
        src="https://avatars.githubusercontent.com/u/72015679?v=4"
        alt="Avatar"
      />
      <MAvatar
        src="https://avatars.githubusercontent.com/u/5158436?v=4"
        alt="Avatar"
      />
      <MAvatar
        src="https://avatars.githubusercontent.com/u/71938701?v=4"
        alt="Avatar"
      />
    </MAvatarGroup>
    <MAvatarGroup :max="2" size="md">
      <MAvatar
        src="https://avatars.githubusercontent.com/u/72015679?v=4"
        alt="Avatar"
      />
      <MAvatar
        src="https://avatars.githubusercontent.com/u/5158436?v=4"
        alt="Avatar"
      />
      <MAvatar
        src="https://avatars.githubusercontent.com/u/71938701?v=4"
        alt="Avatar"
      />
      <MAvatar />

      <MAvatar
        src="https://avatars.githubusercontent.com/u/71938701?v=4"
        alt="Avatar"
      />
    </MAvatarGroup>

    <MAvatarGroup :max="4" size="md">
      <MAvatar
        src="https://avatars.githubusercontent.com/u/72015679?v=4"
        alt="Avatar"
      />
      <MAvatar
        src="https://avatars.githubusercontent.com/u/5158436?v=4"
        alt="Avatar"
      />
      <MAvatar
        src="https://avatars.githubusercontent.com/u/71938701?v=4"
        alt="Avatar"
      />

      <MAvatar
        src="https://avatars.githubusercontent.com/u/71981971?v=4"
        alt="Avatar"
      />
    </MAvatarGroup>

    <MAvatarGroup :max="4" size="md">
      <MAvatar
        src="https://avatars.githubusercontent.com/u/72015679?v=4"
        alt="Avatar"
      />
      <MAvatar
        src="https://avatars.githubusercontent.com/u/71938701?v=4"
        alt="Avatar"
      />
    </MAvatarGroup>

    <MAvatarGroup :max="4" size="xl">
      <MAvatar
        src="https://avatars.githubusercontent.com/u/72015679?v=4"
        alt="Avatar"
      />
      <MAvatar
        src="https://avatars.githubusercontent.com/u/71938701?v=4"
        alt="Avatar"
      />
    </MAvatarGroup>
  </MPageBody>
</template>

<style scoped></style>

