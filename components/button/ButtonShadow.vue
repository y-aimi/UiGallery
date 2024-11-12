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
  background-color: #97D3FF;
  box-shadow: 0 0.4rem 0 #008BF2
}

@media (hover :hover){
  .button:hover {
    background-color: #57B8FF
  }
}

.button:active {
  transform: translateY(0.4rem);
  box-shadow: none
}`;

const handleClick = () => {
  htmlContent.value = htmlContentInit;
  cssContent.value = CssContentInit;
};
</script>

<template>
  <div class="button-section">
    <div class="title-container">
      <p>シャドウ</p>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="edit-icon"
        @click="handleClick"
      />
    </div>
    <button class="shadow">
      ボタン
    </button>
  </div>
</template>

<style scoped>
.shadow {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #97D3FF;
  box-shadow: 0 0.4rem 0 #008BF2
}

@media (hover :hover){
  .shadow:hover {
    background-color: #57B8FF
  }
}

.shadow:active {
  transform: translateY(0.4rem);
  box-shadow: none
}
</style>
