<script setup lang="ts">
const htmlContent = defineModel<string>('htmlContent', { required: true });
const cssContent = defineModel<string>('cssContent', { required: true });

const htmlContentInit = `
<button class="button">
  PCのみ
</button>
`;

const CssContentInit = `
.button {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #97D3FF;
  transition-duration: 0.2s
}

@media (hover :hover){
  .button:hover {
    transform: scale(1.1)
  }

  .button:active {
    transform: scale(1)
  }
}`;

const handleClick = () => {
  htmlContent.value = htmlContentInit;
  cssContent.value = CssContentInit;
};
</script>

<template>
  <div class="button-section-end">
    <div class="title-container">
      <p>スケール</p>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="edit-icon"
        @click="handleClick"
      />
    </div>
    <button class="scale">
      PCのみ
    </button>
  </div>
</template>

<style scoped>
.scale {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #97D3FF;
  transition-duration: 0.2s
}

@media (hover :hover){
  .scale:hover {
    transform: scale(1.1)
  }

  .scale:active {
    transform: scale(1)
  }
}
</style>
