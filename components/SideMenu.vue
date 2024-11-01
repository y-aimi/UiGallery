<script>
import { defineComponent } from 'vue';
import { AppColors } from '~/common/AppColors';

// style定数呼び出し
export default defineComponent({
  setup() {
    return ({
      AppColors,
    });
  },
});
</script>

<template>
  <nav class="side-menu-nav">
    <ul class="side-menu-ul">
      <h2 class="side-menu-h2">
        概要
      </h2>
      <li>
        <NuxtLink
          to="/"
          class="side-menu-li"
        >
          <p>はじめる</p>
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            style="display: block; height: 1.6rem; width: 1.6rem;"
          />
        </NuxtLink>
      </li>
    </ul>
    <ul class="side-menu-ul">
      <h2 class="side-menu-h2">
        コンポーネント
      </h2>
      <li>
        <NuxtLink
          to="/button"
          class="side-menu-li"
        >
          <p>ボタン</p>
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            style="display: block; height: 1.6rem; width: 1.6rem;"
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.side-menu-nav {
  position: sticky;
  top: 4.8rem;
  left: 0;
  overflow: auto;
  width: 30rem;
  max-height: calc(100dvh - 4.8rem);
  background-color: v-bind('AppColors.white');
}

.side-menu-h2 {
  color: v-bind('AppColors.gray900');
  font-weight: bold;
  margin-top: 1rem;
  border-bottom: v-bind(`0.2rem solid ${AppColors.gray50}`);
}

.side-menu-li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: v-bind('AppColors.gray900');
  padding: 1rem 1rem 1rem 2.5rem;
  border-radius: 1rem;
  cursor: pointer;
  }

.side-menu-li:active {
  background-color: v-bind('AppColors.gray100');
}

@media (hover :hover){
  .side-menu-li:hover {
    background-color: v-bind('AppColors.gray50');
  }
}
</style>
