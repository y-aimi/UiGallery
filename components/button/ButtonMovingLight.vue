<script setup lang="ts">
const htmlContent = defineModel<string>('htmlContent', { required: true });
const cssContent = defineModel<string>('cssContent', { required: true });

const htmlContentInit = `
<div class="button-root">
  <div class="light"></div>
  <button class="button">
    Button
  </button>
</div>
`;

const CssContentInit = `
.button-root {
  position: relative;
  overflow: hidden;
  height: 4rem;
  width: 9.6rem;
  cursor: pointer;
  background-color: rgb(77 77 77 / 30%);
  border-radius: 5rem;
  transition: box-shadow 0.4s ease;
}

.light {
  position: absolute;
  bottom: 50%;
  left: 0;
  height: 50%;
  width: 40%;
  transform-origin: bottom;
  animation: prev-move-light 3.2s linear infinite;
  background: linear-gradient(90deg, transparent, #99F2FF );
}

.button {
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(100% - 0.4rem);
  width: calc(100% - 0.4rem);
  border-radius: 5rem;
  background-color: rgb(26 26 26 / 40%);
  color: rgb(255 255 255 / 90%);
  backdrop-filter: blur(10px);
}

@keyframes prev-move-light {
  0% {
    left: 0%;
    transform: translateX(0) rotate(0deg)
  }

  30% {
    left: 100%;
    transform: translateX(-100%) rotate(0deg);
   }

  50% {
    left: 100%;
    transform: translateX(-100%) rotate(180deg);
   }

  80% {
    left: 0%;
    transform: translateX(0) rotate(180deg);
  }

  100% {
    left: 0%;
    transform: translateX(0) rotate(360deg);
  }
}

@media (hover :hover){
  .button-root:hover {
    box-shadow: 0 0 0.5rem #99F2FF;
  }

  .button-root:active {
    background-color: #99F2FF;
  }
}`;

const handleClick = () => {
  htmlContent.value = htmlContentInit;
  cssContent.value = CssContentInit;
};
</script>

<template>
  <div class="button-section">
    <div class="title-container">
      <p>動的ライティング</p>
      <font-awesome-icon
        :icon="['fas', 'code']"
        class="edit-icon"
        @click="handleClick"
      />
    </div>
    <div class="moving-light-canvas">
      <div class="moving-light-root">
        <div class="moving-light" />
        <button
          class="moving-light-fill"
        >
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.moving-light-canvas {
  padding: 1.6rem 2.4rem;
  background-color: #1A1A1A;
}

.moving-light-root {
  position: relative;
  overflow: hidden;
  height: 4rem;
  width: 9.6rem;
  cursor: pointer;
  background-color: rgb(77 77 77 / 30%);
  border-radius: 5rem;
  transition: box-shadow 0.4s ease;
}

.moving-light {
  position: absolute;
  bottom: 50%;
  left: 0;
  height: 50%;
  width: 40%;
  transform-origin: bottom;
  animation: move-light 3.2s linear infinite;
  background: linear-gradient(90deg, transparent, #99F2FF );
}

.moving-light-fill {
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(100% - 0.4rem);
  width: calc(100% - 0.4rem);
  border-radius: 5rem;
  background-color: rgb(26 26 26 / 40%);
  color: rgb(255 255 255 / 90%);
  backdrop-filter: blur(10px);
}

@keyframes move-light {
  0% {
    left: 0%;
    transform: translateX(0) rotate(0deg)
  }

  30% {
    left: 100%;
    transform: translateX(-100%) rotate(0deg);
   }

  50% {
    left: 100%;
    transform: translateX(-100%) rotate(180deg);
   }

  80% {
    left: 0%;
    transform: translateX(0) rotate(180deg);
  }

  100% {
    left: 0%;
    transform: translateX(0) rotate(360deg);
  }
}

@media (hover :hover){
  .moving-light-root:hover {
    box-shadow: 0 0 0.5rem #99F2FF;
  }

  .moving-light-root:active {
    background-color: #99F2FF;
  }
}
</style>
