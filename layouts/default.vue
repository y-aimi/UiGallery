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
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
:global(html) {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 62.5%;
  background: linear-gradient(#E8F1FE, #FBF5E0);
}

:global(header, main, footer) {
  font-size: 1.6rem;
}

.main {
  display: flex;
  justify-content: space-between;
  margin: 4.8rem 1.6rem 0;
  font-size: 1.6rem;
}

.slot {
  flex-grow: 1;
  padding: 1.6rem;
  width: 100%;
  min-height: 100dvh;
}

@media (width >= 960px) {
  .main {
    margin: 4.8rem 2.4rem 0;
  }

  .slot {
    width: 60%;
    margin: 3.2rem
  }
}
</style>
