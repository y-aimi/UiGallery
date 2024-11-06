<script setup lang="ts">
import { AppColors } from '~/common/AppColors';
</script>

<template>
  <div class="button-container">
    <div class="button-text-container">
      <p>塗りボタン</p>
      <button class="button-fill-1">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>アンダーライン</p>
      <button class="button-fill-2">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>アウトラインボタン</p>
      <button class="button-outline-1">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>アンダーライン</p>
      <button class="button-outline-2">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>
        <span :style="{ color: AppColors.red600 }">NG</span> テキストボタン
      </p>
      <button class="button-text-1">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>アンダーライン</p>
      <button class="button-text-2">
        ボタン
      </button>
    </div>
    <div class="button-text-container">
      <p>塗りボタン</p>
      <button
        class="button-disable-fill"
        disabled
      >
        ボタン
      </button>
    </div>
    <div class="button-text-container" />
    <div class="button-text-container">
      <p>アウトラインボタン</p>
      <button
        class="button-disable-outline"
        disabled
      >
        ボタン
      </button>
    </div>
    <div class="button-text-container" />
    <div class="button-text-end-container">
      <p>テキストボタン</p>
      <button
        class="button-disable-text"
        disabled
      >
        ボタン
      </button>
    </div>
    <div class="button-text-end-container" />
  </div>
</template>

<style scoped>
.button-fill-1 {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.lightBlue900}`);
  border-radius: 0.5rem;
  background-color: v-bind('AppColors.lightBlue300')
}

.button-fill-1:active {
  background-color: v-bind('AppColors.lightBlue600');
}

.button-fill-2 {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.lightBlue900}`);
  border-radius: 0.5rem;
  background-color: v-bind('AppColors.lightBlue300')
}

.button-fill-2:active {
  background-color: v-bind('AppColors.lightBlue600');
}

.button-outline-1 {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.lightBlue900}`);
  border-radius: 0.5rem
}

.button-outline-1:active {
  background-color: v-bind('AppColors.gray200');
}

.button-outline-2 {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.lightBlue900}`);
  border-radius: 0.5rem
}

.button-outline-2:active {
  background-color: v-bind('AppColors.gray200');
}

.button-text-1 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem
}

.button-text-1:active {
  background-color: v-bind('AppColors.gray200');
}

.button-text-2 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  text-decoration-line: underline;
  text-underline-offset: 0.2rem
}

.button-text-2:active {
  background-color: v-bind('AppColors.gray200');
}

.button-disable-fill {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: v-bind('AppColors.white');
  background-color: v-bind('AppColors.gray200');
  cursor: default
}

.button-disable-outline {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.gray300}`);
  border-radius: 0.5rem;
  color: v-bind('AppColors.gray300');
  cursor: default
}

.button-disable-text {
  padding: 1rem 2.4rem;
  color: v-bind(`0.2rem solid ${AppColors.gray300}`);
  cursor: default
}

@media (hover :hover){
  .button-fill-1:hover {
    background-color: v-bind('AppColors.lightBlue400');
  }

  .button-fill-2:hover {
    background-color: v-bind('AppColors.lightBlue400');
    text-decoration-line: underline;
    text-underline-offset: 0.2rem;
  }

  .button-outline-1:hover {
    background-color: v-bind('AppColors.gray100');
  }

  .button-outline-2:hover {
    background-color: v-bind('AppColors.gray100');
    text-decoration-line: underline;
    text-underline-offset: 0.2rem;
  }

  .button-text-1:hover {
    background-color: v-bind('AppColors.gray100');
  }

  .button-text-2:hover {
    background-color: v-bind('AppColors.gray100');
  }
}

@media (width >= 960px) {
  .button-container {
    padding: 2.4rem;
    margin: 0 1.6rem 1.6rem
  }

  .button-text-container {
    font-size: 1.6rem;
    padding: 3.6rem 0
  }

  .button-text-end-container {
    font-size: 1.6rem;
    padding: 3.6rem 0
  }
}
</style>
