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
  border: 0.2rem solid #39ABFF;
  border-radius: 0.5rem;
  color: #39ABFF;
  background-color: #FFF;
}

@media (hover :hover){
  .button:hover {
    background-color: #39ABFF;
    color: #FFF;
    transition: all 0.3s;
  }
}

.button:active {
  background-color: #008BF2;
  border-color: #008BF2;
}`;

const handleClick = () => {
  htmlContent.value = htmlContentInit;
  cssContent.value = CssContentInit;
};
</script>

<template>
  <div class="button-section">
    <div class="title-container">
      <p>色反転</p>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="edit-icon"
        @click="handleClick"
      />
    </div>
    <button class="color-inversion">
      ボタン
    </button>
  </div>
</template>

<style scoped>
.color-inversion {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #39ABFF;
  border-radius: 0.5rem;
  color: #39ABFF;
  background-color: #FFF;
}

@media (hover :hover){
  .color-inversion:hover {
    background-color: #39ABFF;
    color: #FFF;
    transition: all 0.3s;
  }
}

.color-inversion:active {
  background-color: #008BF2;
  border-color: #008BF2;
}
</style>
