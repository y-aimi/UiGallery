<script setup lang="ts">
</script>

<template>
  <div class="button-text-container">
    <p>シャドウ</p>
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
