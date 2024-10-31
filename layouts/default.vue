<script>
import { defineComponent } from 'vue';
import { AppColors } from '~/common/AppColors';
import { AppConst } from '~/common/AppConst';

// style定数呼び出し
export default defineComponent({
  setup() {
    return ({
      AppColors,
      AppConst,
    });
  },
});
</script>

<template>
  <div>
    <AppHeader />
    <main class="main">
      <SideMenu />
      <div class="slot">
        <slot />
      </div>
      <SideNavigation />
    </main>
  </div>
</template>

<style>
html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 62.5%;
}

header, main, footer {
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
