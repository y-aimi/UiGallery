<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';

/** マウントされたかどうか */
const isInited = ref(false);

const isPc = useMediaQuery('(min-width: 960px)');
const isOpen = ref(false);

const router = useRouter();

onMounted(() => {
  isInited.value = true;
});

// ナビゲーションガードでバーガーメニューを閉じる
router.afterEach(() => {
  isOpen.value = false;
});
</script>

<template>
  <div>
    <header class="header">
      <font-awesome-icon
        v-if="isInited && !isPc"
        :icon="['fas', 'bars']"
        class="menu-button"
        @click="isOpen = true"
      />
    </header>
    <BurgerMenu
      v-if="isInited && !isPc"
      v-model:is-open="isOpen"
    />
  </div>
</template>

<style scoped>
.header {
  z-index: 100;
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4.8rem;
  width: 100%;
  padding: 0 1.6rem;
  border-bottom: 0.2rem solid;
  border-color: #F2F2F2;
  background-color: rgb(255 255 255 / 75%);
  font-size: 1.6rem
}

.menu-button {
  height: 2.6rem;
  width: 2.6rem;
  cursor: pointer
}
</style>
