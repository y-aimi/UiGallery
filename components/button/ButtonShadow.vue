<script setup lang="ts">
</script>

<template>
  <div class="button-container">
    <div class="button-text-end-container">
      <p>シャドウ①</p>
      <button class="button-shadow-1">
        ボタン
      </button>
    </div>
    <div class="button-text-end-container">
      <p>シャドウ②</p>
      <button class="button-shadow-2">
        ボタン
      </button>
    </div>
  </div>
</template>

<style scoped>
.button-shadow-1 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #97D3FF;
  box-shadow: 0 0.4rem 0 #008BF2
}

.button-shadow-1:active {
  transform: translateY(0.4rem);
  box-shadow: none
}

.button-shadow-2 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  background-color: #97D3FF;
  box-shadow: 0 0.4rem 0 #008BF2,
}

.button-shadow-2:active {
  background-color: #57B8FF
}

@media (hover :hover){
  .button-shadow-1:hover {
    background-color: #57B8FF
  }

  .button-shadow-2:hover {
    transform: translateY(0.4rem);
    box-shadow: none
  }
}
</style>
