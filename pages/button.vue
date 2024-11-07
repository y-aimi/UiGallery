<script setup lang="ts">
import { ref } from 'vue';

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

const ButtonShadowHtmlContent = ref(`
<button class="buttonShadow">
  ボタン
</button>
`);

const ButtonShadowCssContent = ref(`
.buttonShadow {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #97D3FF;
  box-shadow: 0 0.4rem 0 #008BF2;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

@media (hover: hover) {
  .buttonShadow:hover {
    background-color: #57B8FF;
  }

  .buttonShadow:active {
    transform: translateY(0.4rem);
    box-shadow: none;
  }
}

.buttonShadow:active {
  transform: translateY(0.4rem);
  box-shadow: none;
}`);

const ButtonScaleHtmlContent = ref(`
<button class="buttonScale">
  ボタン
</button>
`);

const ButtonScaleCssContent = ref(`
.buttonScale {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #97D3FF; 
  transition-duration: 0.2s;
}

@media (hover: hover) {
  .buttonScale:hover {
    transform: scale(1.1);
  }

  .buttonScale:active {
    transform: scale(1);
  }
}

.buttonScale:active {
  transform: scale(1);
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
      id="default"
      v-model:html-content="ButtonDefaultHtmlContent"
      v-model:css-content="ButtonDefaultCssContent"
    />
    <h2 class="h2">
      アニメーションデザイン
    </h2>
    <p class="text-container">
      シャドウアニメーション
    </p>
    <ButtonShadow />
    <CodeBlock
      id="shadow"
      v-model:html-content="ButtonShadowHtmlContent"
      v-model:css-content="ButtonShadowCssContent"
    />
    <p class="text-container">
      スケールアニメーション
    </p>
    <ButtonScale />
    <CodeBlock
      id="scale"
      v-model:html-content="ButtonScaleHtmlContent"
      v-model:css-content="ButtonScaleCssContent"
    />
  </div>
</template>

<!-- buttonページ共通style -->
<style>
.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.2rem;
  border: 0.2rem solid #B3B3B3;
  border-radius: 0.5rem;
  margin-bottom: 1.6rem;
  background-color: #F2F2F2
}

.button-text-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.6rem;
  width: 50%;
  padding: 2.4rem 0;
  border-bottom: 0.2rem solid #CCC
}

.button-text-end-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.6rem;
  width: 50%;
  padding: 2.4rem 0
}

@media (width >= 960px) {
  .button-container {
    padding: 2.4rem;
    margin: 0 1.6rem 1.6rem
  }

  .button-text-container {
    font-size: 1.6rem;
    padding: 3.6rem 0
  }

  .button-text-end-container {
    font-size: 1.6rem;
    padding: 3.6rem 0
  }
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
