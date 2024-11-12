<script setup lang="ts">
</script>

<template>
  <div class="button-text-container">
    <p>波紋</p>
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
