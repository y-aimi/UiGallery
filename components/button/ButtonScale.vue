<script setup lang="ts">
</script>

<template>
  <div class="button-text-end-container">
    <p>スケール</p>
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
