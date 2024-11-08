<script setup lang="ts">
useHead({
  title: 'UIギャラリー',
  meta: [
    { name: 'description', content: 'UIのギャラリーサイトです' },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
  /* 共通トランジション */
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
