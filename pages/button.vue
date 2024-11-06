<script setup lang="ts">
// ---------------------------------------------
// style初期値定義
// ---------------------------------------------
const ButtonDefaultHtmlContent = ref(`
<button class="button">
  ボタン
</button>
`);

const ButtonDefaultCssContent = ref(`
.button {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #0055AD;
  border-radius: 0.5rem;
  background-color: #97D3FF;
}
@media (hover: hover) {
  .button:hover {
    background-color: #57B8FF;
  }
}
.button:active {
  background-color: #008BF2;
}`);
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
    <CodeBlock
      v-model:html-content="ButtonDefaultHtmlContent"
      v-model:css-content="ButtonDefaultCssContent"
    />
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
.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.2rem;
  border: 0.2rem solid #B3B3B3; /* AppColors.gray300 */
  border-radius: 0.5rem;
  margin-bottom: 1.6rem;
  background-color: #F2F2F2 /* AppColors.gray50 */
}

.button-text-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
  width: 50%;
  padding: 2.4rem 0;
  border-bottom: 0.2rem solid #CCC /* AppColors.gray200 */
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
