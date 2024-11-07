<script setup lang="ts">
import { AppRoutes } from '~/common/AppRoutes';

const isOpen = defineModel<boolean>('isOpen', { required: true });
</script>

<template>
  <div :class="['menu', isOpen ? 'menu-open' : 'menu-close']">
    <div class="close-button-container">
      <NuxtLink
        :to="AppRoutes.index"
        class="logo-container"
      >
        <NuxtImg
          src="/ui_gallery_logo.svg"
          class="logo"
        />
      </NuxtLink>
      <font-awesome-icon
        :icon="['fas', 'bars']"
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
      <div class="burger-menu-text-wrapper">
        <p>プルダウン</p>
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          style="display: block; height: 1.6rem; width: 1.6rem;"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  width: 30rem;
  height: 100%;
  background-color: #FFF;
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
  justify-content: space-between;
  width: 100%;
  height: 4.8rem;
  padding: 0 1.6rem;
  border-bottom: 0.2rem solid;
  border-color: #F2F2F2;
  background-color: rgb(255 255 255 / 75%)
}

.logo-container {
  display: flex;
  align-items: center
}

.logo {
  background-size: cover;
  height: 4.4rem;
  width: 4.4rem
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
  background-color: #FFF
}

.burger-menu-h2 {
  color: #1A1A1A;
  font-weight: bold;
  margin-top: 1rem;
  border-bottom: 0.2rem solid #F2F2F2
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

.burger-menu-text-wrapper:active {
  background-color: #E6E6E6
}

@media (hover :hover){
  .burger-menu-text-wrapper:hover {
    background-color: #F2F2F2
  }
}
</style>
