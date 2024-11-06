<script setup lang="ts">
</script>

<template>
  <div class="button-container">
    <div class="button-text-end-container">
      <p>スケールボタン①</p>
      <button class="button-scale-1">
        ボタン
      </button>
    </div>
    <div class="button-text-end-container">
      <p>スケールボタン②</p>
      <button class="button-scale-2">
        ボタン
      </button>
    </div>
  </div>
</template>

<style scoped>
.button-scale-1 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #97D3FF;
  transition-duration: 0.2s
}

.button-scale-2 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  transition-duration: 0.2s;
  text-decoration-line: underline;
  text-underline-offset: 0.2rem
}

@media (hover :hover){
  .button-scale-1:hover {
    transform: scale(1.1)
  }

  .button-scale-1:active {
    transform: scale(1)
  }

  .button-scale-2:hover {
    transform: scale(1.1)
  }

  .button-scale-2:active {
    transform: scale(1);
  }
}
</style>
