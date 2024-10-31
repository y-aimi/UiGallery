<script>
useHead({
  title: 'UIギャラリー',
  meta: [
    { name: 'description', content: 'UIのギャラリーサイトです' },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  /* 共通トランジション */
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
