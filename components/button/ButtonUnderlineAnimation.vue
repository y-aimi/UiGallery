<script setup lang="ts">
</script>

<template>
  <div class="button-text-container">
    <p>下線アニメーション</p>
    <a class="underline-animation">
      ボタン
    </a>
  </div>
</template>

<style scoped>
.underline-animation {
  padding: 1rem 1.5rem;
  color: #39ABFF;
  cursor: pointer;
  position: relative
}

.underline-animation::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.2rem;
  background-color: #39ABFF;
  transform: scale(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

@media (hover :hover){
  .underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
