<script setup lang="ts">
const htmlContent = defineModel<string>('htmlContent', { required: true });
const cssContent = defineModel<string>('cssContent', { required: true });

const htmlContentInit = `
<div class="prev-area">
  <details class="prev-details">
    <summary class="prev-summary">
      概要
      <span class="prev-icon" />
    </summary>
    <span class="prev-detail-content">コンテンツコンテンツコンテンツ<br>コンテンツコンテンツコンテンツ</span>
  </details>
</div>
`;

const CssContentInit = `
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
}`;

const handleClick = () => {
  htmlContent.value = htmlContentInit;
  cssContent.value = CssContentInit;
};
</script>

<template>
  <div class="accordion-section">
    <div class="accordion-title-container">
      <p>基本</p>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="edit-icon"
        @click="handleClick"
      />
    </div>
    <details class="details">
      <summary class="summary">
        概要
        <span class="icon" />
      </summary>
      <span class="detail-content">コンテンツコンテンツコンテンツ<br>コンテンツコンテンツコンテンツ</span>
    </details>
    <details class="details">
      <summary class="summary">
        Q. 開閉に滑らかなアニメーションを付与できますか？
        <span class="icon" />
      </summary>
      <span class="detail-content">A. JSを使用すれば可能です<br><br>ここではHTMLとCSSで完結させているためアニメーションは付与していません。</span>
    </details>
  </div>
</template>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}

.icon {
  display: block;
  position: relative;
  width: 1.7rem;
  margin-left: 0.8rem;
  flex-shrink: 0;
  transform-origin: center 43%;
  transition: transform 0.4s;
}

.icon::before,
.icon::after {
  content: "";
  position: absolute;
  display: block;
  width: 1.1rem;
  height: 0.3rem;
  background-color: #4979F5;
}

.icon::before {
  left: 0;
  transform: rotate(45deg);
}

.icon::after {
  right: 0;
  transform: rotate(-45deg);
}

.details {
  width: 100%;
  color: #1A1A1A;
  font-size: 1.2rem;
}

.details[open] .icon {
  transform: rotate(180deg);
}

.summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.4rem;
  border: 0.1rem solid #4979F5;
  background-color: #FAFAFA;
  cursor: pointer;
  font-weight: bold;
}

.detail-content {
  display: flex;
  padding: 1rem 2.4rem;
  background-color: #E8F1FE;
  border: 0.1rem solid #4979F5;
  border-top: none;
}

@media (hover :hover){
  .summary:hover {
    background-color: #F0F9FF;
    transition: all 0.3s;
  }
}

@media (width >= 960px) {
  .details {
    width: 70%;
    font-size: 1.6rem;
  }
}
</style>
