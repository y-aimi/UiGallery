<script setup lang="ts">
import { ref } from 'vue';

const isLoading = ref(false);
const disableRefresh = ref(false);
/**
 * 一瞬だけコンポーネントをアンマウントしてリフレッシュする
 */
const refresh = async () => {
  if (disableRefresh.value) {
    return;
  }
  isLoading.value = true;
  disableRefresh.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1);
  setTimeout(() => {
    disableRefresh.value = false;
  }, 1000);

  // コードブロックを初期化
  SkeletonHtmlContent.value = SkeletonHtmlInit;
  SkeletonCssContent.value = SkeletonCssInit;
};

// ---------------------------------------------
// style初期値定義
// ---------------------------------------------
const SkeletonHtmlInit = `
<div class="skeleton-container">
  <div class="skeleton skeleton-img"></div>
  <div class="skeleton skeleton-title"></div>
</div>
`;
const SkeletonHtmlContent = ref(SkeletonHtmlInit);

const SkeletonCssInit = `
.skeleton-container {
  display: flex;
  flex-direction: column;
}

.skeleton {
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.skeleton::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 60%), transparent);
  animation: skeleton-wave 1.6s ease-in-out infinite;
}

.skeleton-img {
  height: 11.2rem;
  width: 8rem
}

.skeleton-title {
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  height: 1.2rem;
  width: 8rem
}

@keyframes skeleton-wave {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}`;
const SkeletonCssContent = ref(SkeletonCssInit);
</script>

<template>
  <div>
    <h1 class="h1">
      スケルトン
    </h1>
    <div class="text-container">
      <p class="text">
        スケルトンのUIギャラリーです<br>（今期アニメ一覧）
      </p>
      <font-awesome-icon
        :icon="['fas', 'rotate']"
        :style="{ height: '2.4rem', width: '2.4rem', marginRight: '1.6rem', cursor: 'pointer', color: disableRefresh ? '#C2E5D1' : '#2CAC6E' }"
        @click="refresh"
      />
    </div>
    <Skeleton v-if="!isLoading" />
    <CodeBlock
      id="default"
      v-model:html-content="SkeletonHtmlContent"
      v-model:css-content="SkeletonCssContent"
    />
  </div>
</template>

<style scoped>
.h1 {
  font-size: 2.4rem;
  font-weight: bold
}

.h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 4rem
}

.text {
  margin: 1.6rem;
}

.text-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (width >= 960px) {
  .h1 {
    font-size: 3.2rem
  }
}
</style>
