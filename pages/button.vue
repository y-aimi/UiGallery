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
  border: 0.2rem solid #39ABFF;
  border-radius: 0.5rem;
  color: #39ABFF;
  background-color: #FFF;
}
@media (hover: hover) {
  .button:hover {
    background-color: #39ABFF;
    color: #FFF;
    transition: all 0.3s;
  }
}
.button:active {
  background-color: #008BF2;
  border-color: #008BF2;
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
    <div class="button-container">
      <ButtonColorInversion />
      <ButtonColorInversionUnderline />
      <ButtonBackgroundAnimation />
      <ButtonUnderlineAnimation />
      <ButtonRipple />
      <ButtonTwinkle />
      <ButtonMovingLight />
      <ButtonShadow />
      <ButtonScale />
      <div class="button-text-end-container" />
    </div>
    <CodeBlock
      id="default"
      v-model:html-content="ButtonDefaultHtmlContent"
      v-model:css-content="ButtonDefaultCssContent"
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
  width: 100%;
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
    padding: 3.6rem 0;
    width: 50%;
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
