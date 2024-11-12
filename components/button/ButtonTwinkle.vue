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
  position: relative;
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #39ABFF;
  color: #FFF;
  overflow: hidden;
}

.button::before {
  position: absolute;
  content: '';
  top: 0;
  left: -10%;
  width: 10%;
  height: 100%;
  background-color: #FFF;
  animation: prev-twinkle 2.5s ease-in-out infinite;
}

@keyframes prev-twinkle {
    0% {
      transform: scale(0) rotate(45deg);
      opacity: 0;
    }

    80% {
      transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }

    81% {
      transform: scale(4) rotate(45deg);
      opacity: 1;
    }

    100% {
      transform: scale(50) rotate(45deg);
      opacity: 0;
    }
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
      <p>一瞬光る</p>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="edit-icon"
        @click="handleClick"
      />
    </div>
    <button class="twinkle">
      ボタン
    </button>
  </div>
</template>

<style scoped>
.twinkle {
  position: relative;
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #39ABFF;
  color: #FFF;
  overflow: hidden;
}

.twinkle::before {
  position: absolute;
  content: '';
  top: 0;
  left: -10%;
  width: 10%;
  height: 100%;
  background-color: #FFF;
  animation: twinkle 2.5s ease-in-out infinite;
}

@keyframes twinkle {
    0% {
      transform: scale(0) rotate(45deg);
      opacity: 0;
    }

    80% {
      transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }

    81% {
      transform: scale(4) rotate(45deg);
      opacity: 1;
    }

    100% {
      transform: scale(50) rotate(45deg);
      opacity: 0;
    }
}

.twinkle:active {
  background-color: #008BF2;
}
</style>
