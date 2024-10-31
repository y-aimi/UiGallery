<script>
import { defineComponent } from 'vue';
import { AppColors } from '~/common/AppColors';

// style定数呼び出し
export default defineComponent({
  setup() {
    return ({
      AppColors,
    });
  },
});
</script>

<template>
  <div class="side-nav" />
</template>

<style>
.side-nav {
  flex: 1;
  position: sticky;
  top: 4.8rem;
  right: 0;
  overflow: auto;
  width: 30rem;
  max-height: calc(100dvh - 4.8rem);
  background-color: lightyellow
}
</style>
