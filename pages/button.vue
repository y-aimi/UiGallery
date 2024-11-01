<template>
  <div>
    <h1 class="button-h1">
      ボタン
    </h1>
    <div class="button-text-container">
      <p>ボタンのUIギャラリーです</p>
    </div>
    <h2 class="button-h2">
      基本デザイン
    </h2>
    <p class="button-text-container">
      基本的なデザインパターン
    </p>
    <ButtonDefault />
    <!-- <CodeBlockEditable
      html-string="{ButtonDefaultHtmlString}"
      css-string="{ButtonDefaultCssString}"
    /> -->
    <h2 class="button-h2">
      アニメーションデザイン
    </h2>
    <p class="button-text-container">
      シャドウアニメーション
    </p>
    <!-- <ButtonShadow />
    <CodeBlockEditable
      html-string="{ButtonShadowHtmlString}"
      css-string="{ButtonShadowCssString}"
    /> -->
    <p class="button-text-container">
      スケールアニメーション
    </p>
    <!-- <ButtonScale />
    <CodeBlockEditable
      html-string="{ButtonScaleHtmlString}"
      css-string="{ButtonScaleCssString}"
    /> -->
  </div>
</template>

<style>
.button-h1 {
  font-size: 2.4rem;
  font-weight: bold
}

.button-h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 4rem
}

@media (width >= 960px) {
  .button-h1 {
    font-size: 3.2rem
  }
}

.button-text-container {
  margin: 3.2rem 1.6rem 1.6rem;
}
</style>
