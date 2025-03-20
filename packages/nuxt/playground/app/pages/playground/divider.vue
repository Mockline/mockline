<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-4 w-full mx-auto max-w-3xl">
    <ProseH4>
      Horizontal Divider (default)
    </ProseH4>
    <div class="flex flex-col gap-4">
      <MDivider />
    </div>
    <ProseH4>
      Horizontal Divider (dashed)
    </ProseH4>
    <div class="flex flex-col gap-4">
      <MDivider variant="dashed" />
    </div>
    <ProseH4>
      Horizontal Divider (dotted)
    </ProseH4>
    <div class="flex flex-col gap-4">
      <MDivider variant="dotted" />
    </div>
    <ProseH4>
      Divider with label
    </ProseH4>
    <div class="flex flex-row gap-4">
      <MDivider label="OR" />
    </div>
    <ProseH4>
      Divider with accent color
    </ProseH4>
    <div class="flex flex-col gap-4">
      <MDivider label="Primary" color="primary" />
      <MDivider label="Max Width" class="w-48" color="primary" />
    </div>
    <ProseH4>
      Sizes
    </ProseH4>
    <div class="flex flex-col gap-4">
      <MDivider size="xs" label="XS" />
      <MDivider size="sm" label="SM" />
      <MDivider size="md" label="MD" />
      <MDivider size="lg" label="LG" />
      <MDivider size="xl" label="XL" />
    </div>
    <ProseH4>
      Vertical Divider
    </ProseH4>
    <div class="flex flex-row justify-center gap-4">
      <MDivider orientation="vertical" class="h-48" />
      <MDivider orientation="vertical" label="Mockline" class="h-48" />
    </div>
  </div>
</template>

<style scoped>

</style>
