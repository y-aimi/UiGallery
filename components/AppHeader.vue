<script setup>
import { AppColors } from '~/common/AppColors';
</script>

<template>
  <header class="header" />
</template>

<style scoped>
.header {
  z-index: 100;
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4.8rem;
  width: 100%;
  padding: 0 1.6rem;
  border-bottom: 0.2rem solid;
  border-color: v-bind('AppColors.gray50');
  background-color: rgb(255 255 255 / 75%);
  font-size: 1.6rem
}
</style>
