<template>
  <Html>
    <NuxtLoadingIndicator />
    <MApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </MApp>
    <MToasts close-button />
  </Html>
</template>

<style>
@import "mockline";

@source "../content/**/*.md";
</style>
