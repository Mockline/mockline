<template>
  <div>
    <ProseH3>
      Toasts
    </ProseH3>
    <MButton @click="() => toast.success('Copied to clipboard')">
      Regular toast
    </MButton>
  </div>
</template>
