<script setup>
import { AppColors } from '~/common/AppColors';
</script>

<template>
  <div>
    <h1 class="h1">
      ボタン
    </h1>
    <div class="text-container">
      <p>ボタンのUIギャラリーです</p>
    </div>
    <h2 class="h2">
      基本デザイン
    </h2>
    <p class="text-container">
      基本的なデザインパターン
    </p>
    <ButtonDefault />
    <CodeBlock />
    <!-- <CodeBlockEditable
      html-string="{ButtonDefaultHtmlString}"
      css-string="{ButtonDefaultCssString}"
    /> -->
    <h2 class="h2">
      アニメーションデザイン
    </h2>
    <p class="text-container">
      シャドウアニメーション
    </p>
    <!-- <ButtonShadow />
    <CodeBlockEditable
      html-string="{ButtonShadowHtmlString}"
      css-string="{ButtonShadowCssString}"
    /> -->
    <p class="text-container">
      スケールアニメーション
    </p>
    <!-- <ButtonScale />
    <CodeBlockEditable
      html-string="{ButtonScaleHtmlString}"
      css-string="{ButtonScaleCssString}"
    /> -->
  </div>
</template>

<!-- buttonページ共通style -->
<style>
.important {
  color: v-bind('AppColors.red600');
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.2rem;
  border: v-bind(`0.2rem solid ${AppColors.gray300}`);
  border-radius: 0.5rem;
  margin-bottom: 1.6rem;
  background-color: v-bind('AppColors.gray50')
}

.button-text-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
  width: 50%;
  padding: 2.4rem 0;
  border-bottom: v-bind(`0.2rem solid ${AppColors.gray200}`)
}

.button-text-end-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
  width: 50%;
  padding: 2.4rem 0
}
</style>

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

@media (width >= 960px) {
  .h1 {
    font-size: 3.2rem
  }
}

.text-container {
  margin: 3.2rem 1.6rem 1.6rem;
}
</style>
