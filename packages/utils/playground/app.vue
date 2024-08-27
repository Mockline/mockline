<template>
  <div class="size-full bg-white text-black dark:bg-black dark:text-white">
    <h1 class="flex items-center justify-center gap-2 text-center text-2xl">
      <span class="font-newsreader italic">Mockline</span> Utils Playground
      <Icon name="lucide:plus-circle" class="text-primary size-6" />
      <Icon name="custom:mockline" class="size-8 fill-red-600" />
      <MThemeToggle />
    </h1>
    <button @click="() => toast.info('Hello There!')">
      Render a toast
    </button>
    <MToasts />
  </div>
</template>
