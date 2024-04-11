<script setup lang="ts">
export type ButtonProps = {
  /** Button label */
  label: string;
}
</script>

<template>
  <div>
    <button>
      <slot />
    </button>
  </div>
</template>

<style scoped>

</style>
