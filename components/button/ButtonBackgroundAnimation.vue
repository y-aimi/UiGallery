<script setup lang="ts">
const htmlContent = defineModel<string>('htmlContent', { required: true });
const cssContent = defineModel<string>('cssContent', { required: true });

const htmlContentInit = `
<button class="button">
  ボタン
</button>
`;

const CssContentInit = `
.button {
  z-index: 1;
  position: relative;
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: #39ABFF;
}

.button::before {
  z-index: -1;
  position: absolute;
  content: "";
  background: #39ABFF;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform 0.3s;
}

@media (hover :hover){
  .button:hover {
    color: #FFF;
  }

  .button:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
}

.button:active {
  background-color: #CCC;
}`;

const handleClick = () => {
  htmlContent.value = htmlContentInit;
  cssContent.value = CssContentInit;
};
</script>

<template>
  <div class="button-section">
    <div class="title-container">
      <p>背景アニメーション</p>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="edit-icon"
        @click="handleClick"
      />
    </div>
    <button class="background-animation">
      ボタン
    </button>
  </div>
</template>

<style scoped>
.background-animation {
  z-index: 1;
  position: relative;
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: #39ABFF;
}

.background-animation::before {
  z-index: -1;
  position: absolute;
  content: "";
  background: #39ABFF;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform 0.3s;
}

@media (hover :hover){
  .background-animation:hover {
    color: #FFF;
  }

  .background-animation:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
}

.background-animation:active {
  background-color: #CCC;
}
</style>
