<script>
useHead({
  title: 'UIギャラリー',
  meta: [
    { name: 'description', content: 'UIのギャラリーサイトです' },
  ],
});
const price = ref(9.99);
console.log(price.value);

const instructor = reactive({
  name: 'test',
  age: 20,
});
console.log(instructor);
const d = reactive();
console.log(d);
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
