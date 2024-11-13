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
      <ButtonColorInversion
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
      <ButtonColorInversionUnderline
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
      <ButtonBackgroundAnimation
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
      <ButtonUnderlineAnimation
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
      <ButtonRipple
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
      <ButtonTwinkle
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
      <ButtonMovingLight
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
      <ButtonShadow
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
      <ButtonScale
        v-model:html-content="ButtonDefaultHtmlContent"
        v-model:css-content="ButtonDefaultCssContent"
      />
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
.button-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.6rem;
  width: 100%;
  padding: 2.4rem 0;
  border-bottom: 0.2rem solid #CCC
}

.button-section-end {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.6rem;
  width: 100%;
  padding: 2.4rem 0;
}

.title-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  height: 3.5rem;
  min-width: 24rem;
}

.edit-icon {
  position: absolute;
  top:0;
  right:0;
  width: 1.6rem;
  height: 1.6rem;
  color: #51B883;
  background-color: #E6F5EC;
  padding: 0.3rem;
  border: 0.2rem solid #51B883;
  border-radius: 0.5rem;
  cursor: pointer;
}

@media (hover :hover){
  .edit-icon:hover {
    background-color: #51B883;
    color: #E6F5EC;
    transition: all 0.3s;
  }
}

.edit-icon:active {
  background-color: #259D63;
  border-color: #259D63;
}

@media (width >= 960px) {
  .button-container {
    padding: 2.4rem;
    margin: 0 1.6rem 1.6rem
  }

  .button-section {
    font-size: 1.6rem;
    padding: 3.6rem 0;
    width: 50%;
  }

  .button-section-end {
    font-size: 1.6rem;
    padding: 3.6rem 0;
    width: 50%;
  }

  .edit-icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>

<style scoped>
.button-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1.2rem;
  border: 0.2rem solid #B3B3B3;
  border-radius: 0.5rem;
  margin-bottom: 1.6rem;
  background-color: #F2F2F2
}

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
