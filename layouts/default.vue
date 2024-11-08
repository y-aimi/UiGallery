<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
/** マウントされたかどうか */
const isInited = ref(false);

const isPc = useMediaQuery('(min-width: 960px)');

onMounted(() => {
  isInited.value = true;
});
</script>

<template>
  <div ontouchstart="">
    <AppHeader />
    <main
      class="main"
    >
      <SideMenu v-if="isInited && isPc" />
      <div class="slot">
        <NuxtPage />
      </div>
      <SideNavigation v-if="isInited && isPc" />
    </main>
  </div>
</template>

<style scoped>
:global(html) {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 62.5%;
}

:global(header, main, footer) {
  font-size: 1.6rem;
}

.main {
  display: flex;
  justify-content: center;
  margin: 0 1.6rem;
  margin-top: 4.8rem;
  font-size: 1.6rem;
}

.slot {
  padding: 1.6rem;
  width: 100%;
}

@media (width >= 960px) {
  .slot {
    width: 60%;
    margin: 3.2rem
  }
}
</style>
