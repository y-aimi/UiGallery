<script setup lang="ts">
</script>

<template>
  <div class="button-text-container">
    <p>色反転+下線</p>
    <button class="color-inversion-underline">
      ボタン
    </button>
  </div>
</template>

<style scoped>
.color-inversion-underline {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #39ABFF;
  border-radius: 0.5rem;
  color: #39ABFF;
  background-color: #FFF;
}

@media (hover :hover){
  .color-inversion-underline:hover {
    background-color: #39ABFF;
    text-decoration-line: underline;
    text-underline-offset: 0.2rem;
    color: #FFF;
    transition: all 0.3s;
  }
}

.color-inversion-underline:active {
  background-color: #008BF2;
  border-color: #008BF2;
}
</style>
