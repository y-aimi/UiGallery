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
  <div class="button-default-button-container">
    <div class="button-default-button-text-container">
      <p>塗りボタン</p>
      <button class="button-default-button-fill-1">
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-container">
      <p>アンダーライン</p>
      <button class="button-default-button-fill-2">
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-container">
      <p>アウトラインボタン</p>
      <button class="button-default-button-outline-1">
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-container">
      <p>アンダーライン</p>
      <button class="button-default-button-outline-2">
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-container">
      <p>
        <span class="button-important">NG</span> テキストボタン
      </p>
      <button class="button-default-button-text-1">
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-container">
      <p>アンダーライン</p>
      <button class="button-default-button-text-2">
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-container">
      <p>塗りボタン</p>
      <button
        class="button-default-button-disable-fill"
        disabled
      >
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-container" />
    <div class="button-default-button-text-container">
      <p>アウトラインボタン</p>
      <button
        class="button-default-button-disable-outline"
        disabled
      >
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-container" />
    <div class="button-default-button-text-end-container">
      <p>テキストボタン</p>
      <button
        class="button-default-button-disable-text"
        disabled
      >
        ボタン
      </button>
    </div>
    <div class="button-default-button-text-end-container" />
  </div>
</template>

<style>
.button-important {
  color: v-bind('AppColors.red600');
}

.button-default-button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.2rem;
  border: v-bind(`0.2rem solid ${AppColors.gray300}`);
  border-radius: 0.5rem;
  margin-bottom: 1.6rem;
  background-color: v-bind('AppColors.gray50')
}

.button-default-button-text-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
  width: 50%;
  padding: 2.4rem 0;
  border-bottom: v-bind(`0.2rem solid ${AppColors.gray200}`)
}

.button-default-button-text-end-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
  width: 50%;
  padding: 2.4rem 0
}

.button-default-button-fill-1 {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.lightBlue900}`);
  border-radius: 0.5rem;
  background-color: v-bind('AppColors.lightBlue300')
}

.button-default-button-fill-1:active {
  background-color: v-bind('AppColors.lightBlue600');
}

.button-default-button-fill-2 {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.lightBlue900}`);
  border-radius: 0.5rem;
  background-color: v-bind('AppColors.lightBlue300')
}

.button-default-button-fill-2:active {
  background-color: v-bind('AppColors.lightBlue600');
}

.button-default-button-outline-1 {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.lightBlue900}`);
  border-radius: 0.5rem
}

.button-default-button-outline-1:active {
  background-color: v-bind('AppColors.gray200');
}

.button-default-button-outline-2 {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.lightBlue900}`);
  border-radius: 0.5rem
}

.button-default-button-outline-2:active {
  background-color: v-bind('AppColors.gray200');
}

.button-default-button-text-1 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem
}

.button-default-button-text-1:active {
  background-color: v-bind('AppColors.gray200');
}

.button-default-button-text-2 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  text-decoration-line: underline;
  text-underline-offset: 0.2rem
}

.button-default-button-text-2:active {
  background-color: v-bind('AppColors.gray200');
}

.button-default-button-disable-fill {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: v-bind('AppColors.white');
  background-color: v-bind('AppColors.gray200');
  cursor: default
}

.button-default-button-disable-outline {
  padding: 1rem 2.4rem;
  border: v-bind(`0.2rem solid ${AppColors.gray300}`);
  border-radius: 0.5rem;
  color: v-bind('AppColors.gray300');
  cursor: default
}

.button-default-button-disable-text {
  padding: 1rem 2.4rem;
  color: v-bind(`0.2rem solid ${AppColors.gray300}`);
  cursor: default
}

@media (hover :hover){
  .button-default-button-fill-1:hover {
    background-color: v-bind('AppColors.lightBlue400');
  }

  .button-default-button-fill-2:hover {
    background-color: v-bind('AppColors.lightBlue400');
    text-decoration-line: underline;
    text-underline-offset: 0.2rem;
  }

  .button-default-button-outline-1:hover {
    background-color: v-bind('AppColors.gray100');
  }

  .button-default-button-outline-2:hover {
    background-color: v-bind('AppColors.gray100');
    text-decoration-line: underline;
    text-underline-offset: 0.2rem;
  }

  .button-default-button-text-1:hover {
    background-color: v-bind('AppColors.gray100');
  }

  .button-default-button-text-2:hover {
    background-color: v-bind('AppColors.gray100');
  }
}

@media (width >= 960px) {
  .button-default-button-container {
    padding: 2.4rem;
    margin: 0 1.6rem 1.6rem
  }

  .button-default-button-text-container {
    font-size: 1.6rem;
    padding: 3.6rem 0
  }

  .button-default-button-text-end-container {
    font-size: 1.6rem;
    padding: 3.6rem 0
  }
}
</style>
