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
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: #FFF;
  background-color: #39ABFF;
  background-size: 200% auto;
  animation: prev-ripple 1.5s infinite;
}

@keyframes prev-ripple {
  0% {box-shadow: 0 0 0 0 #39ABFF;}
  70% {box-shadow: 0 0 0 10px rgb(27 133 251 / 0%);}
  100% {box-shadow: 0 0 0 0 rgb(27 133 251 / 0%);}
}

.button:active {
  background-color: #008BF2;
}`;

const handleClick = () => {
  htmlContent.value = htmlContentInit;
  cssContent.value = CssContentInit;
};
</script>

<template>
  <div class="button-section">
    <div class="title-container">
      <p>波紋</p>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="edit-icon"
        @click="handleClick"
      />
    </div>
    <button class="ripple">
      ボタン
    </button>
  </div>
</template>

<style scoped>
.ripple {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: #FFF;
  background-color: #39ABFF;
  background-size: 200% auto;
  animation: ripple 1.5s infinite;
}

@keyframes ripple {
  0% {box-shadow: 0 0 0 0 #39ABFF;}
  70% {box-shadow: 0 0 0 10px rgb(27 133 251 / 0%);}
  100% {box-shadow: 0 0 0 0 rgb(27 133 251 / 0%);}
}

.ripple:active {
  background-color: #008BF2;
}
</style>
