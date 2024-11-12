<script setup lang="ts">
</script>

<template>
  <div class="button-text-container">
    <p>背景アニメーション</p>
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
