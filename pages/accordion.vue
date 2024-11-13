<script setup lang="ts">
import { ref } from 'vue';
import Accordion from '~/components/accordion/Accordion.vue';

// ---------------------------------------------
// style初期値定義
// ---------------------------------------------
const ButtonDefaultHtmlContent = ref(`
<div class="prev-area">
  <details class="prev-details">
    <summary class="prev-summary">
      概要
      <span class="prev-icon" />
    </summary>
    <span class="prev-detail-content">コンテンツコンテンツコンテンツ<br>コンテンツコンテンツコンテンツ</span>
  </details>
</div>
`);

const ButtonDefaultCssContent = ref(`
.prev-icon {
  display: block;
  position: relative;
  width: 1.7rem;
  margin-left: 0.8rem;
  flex-shrink: 0;
  transform-origin: center 43%;
  transition: transform 0.4s;
}

.prev-icon::before,
.prev-icon::after {
  content: "";
  position: absolute;
  display: block;
  width: 1.1rem;
  height: 0.3rem;
  background-color: #4979F5;
}

.prev-icon::before {
  left: 0;
  transform: rotate(45deg);
}

.prev-icon::after {
  right: 0;
  transform: rotate(-45deg);
}

.prev-details {
  width: 100%;
  color: #1A1A1A;
  font-size: 1.2rem;
}

.prev-details[open] .prev-icon {
  transform: rotate(180deg);
}

.prev-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.4rem;
  border: 0.1rem solid #4979F5;
  background-color: #FAFAFA;
  cursor: pointer;
  font-weight: bold;
}

.prev-detail-content {
  display: flex;
  padding: 1rem 2.4rem;
  background-color: #E8F1FE;
  border: 0.1rem solid #4979F5;
  border-top: none;
}

@media (hover :hover){
  .prev-summary:hover {
    background-color: #F0F9FF;
    transition: all 0.3s;
  }
}

@media (width >= 960px) {
  .prev-details {
    width: 70%;
    font-size: 1.6rem;
  }
}

/* Safariデフォルトのアイコンを非表示 */
summary::-webkit-details-marker {
  display: none;
}

/* プレビューの動きを滑らかにする用のため本来不要 */
.prev-area {
  display: flex;
  justify-content: center;
  height: 12rem;
  width: 100%
}`);
</script>

<template>
  <div>
    <h1 class="h1">
      アコーディオン
    </h1>
    <div class="text-container">
      <p>アコーディオンのUIギャラリーです</p>
    </div>
    <div class="accordion-container">
      <Accordion
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

<style>
.accordion-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.6rem;
  width: 100%;
  padding: 2.4rem 0;
}

.accordion-title-container{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  height: 3.5rem;
  min-width: 24rem;
}

@media (width >= 960px) {
  .accordion-section {
    font-size: 1.6rem;
    padding: 3.6rem 0;
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

.accordion-container {
  display: flex;
  padding: 1.2rem;
  border: 0.2rem solid #B3B3B3;
  border-radius: 0.5rem;
  margin-bottom: 1.6rem;
  background-color: #F2F2F2
}

@media (width >= 960px) {
  .h1 {
    font-size: 3.2rem
  }

  .accordion-container {
    padding: 2.4rem;
    margin: 0 1.6rem 1.6rem
  }
}

.text-container {
  margin: 3.2rem 1.6rem 1.6rem;
}
</style>
