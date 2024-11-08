<script setup lang="ts">
import { AppRoutes } from '~/common/AppRoutes';

const isOpen = defineModel<boolean>('isOpen', { required: true });
</script>

<template>
  <div :class="['menu', isOpen ? 'menu-open' : 'menu-close']">
    <div class="close-button-container">
      <font-awesome-icon
        :icon="['fas', 'xmark']"
        class="menu-button"
        @click="isOpen = false"
      />
    </div>
    <div class="burger-menu-container">
      <h2 class="burger-menu-h2">
        概要
      </h2>
      <NuxtLink
        :to="AppRoutes.index.url"
        class="burger-menu-text-wrapper"
      >
        <p>はじめる</p>
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          style="display: block; height: 1.6rem; width: 1.6rem;"
        />
      </NuxtLink>
      <h2 class="burger-menu-h2">
        コンポーネント
      </h2>
      <NuxtLink
        :to="AppRoutes.button.url"
        class="burger-menu-text-wrapper"
      >
        <p>ボタン</p>
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          style="display: block; height: 1.6rem; width: 1.6rem;"
        />
      </NuxtLink>
      <NuxtLink
        :to="AppRoutes.skeleton.url"
        class="burger-menu-text-wrapper"
      >
        <p>スケルトン</p>
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          style="display: block; height: 1.6rem; width: 1.6rem;"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.menu {
  z-index: 200;
  position: fixed;
  top: 0;
  right: 0;
  overflow: auto;
  width: 30rem;
  height: 100%;
  background: linear-gradient(#E8F1FE, #FBF5E0);
  box-shadow: -0.1rem 0 5px rgb(0 0 0 / 30%);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
}

.menu-open {
  transform: translateX(0);
  visibility: visible;
  transition: all 0.3s ease-in-out
}

.menu-close {
  transform: translateX(100%);
  visibility: hidden;
  transition: all 0.3s ease-in-out
}

.close-button-container {
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 4.8rem;
  padding: 0 1.6rem;
  background-color: rgb(255 255 255 / 25%)
}

.menu-button {
  height: 2.6rem;
  width: 2.6rem;
  cursor: pointer
}

.burger-menu-container {
  width: 100%;
  max-height: calc(100dvh - 4.8rem);
  padding: 0 1.6rem;
}

.burger-menu-h2 {
  color: #1A1A1A;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 0.1rem solid #7F7F7F;
}

.burger-menu-text-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1A1A1A;
  padding: 1rem 1rem 1rem 2.5rem;
  border-radius: 1rem;
  cursor: pointer
}

@media (hover :hover){
  .burger-menu-text-wrapper:hover {
    background-color: rgb(255 255 255 / 50%)
  }
}

.burger-menu-text-wrapper:active {
  background-color: rgb(255 255 255 / 35%)
}
</style>
