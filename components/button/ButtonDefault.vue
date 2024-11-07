<script setup lang="ts">
</script>

<template>
  <div class="button-container">
    <div class="button-text-container">
      <p>塗り</p>
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
      <p>アウトライン</p>
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
        <span style="color: #FE3939 ">NG</span> テキスト
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
      <p>塗り</p>
      <button
        class="button-disable-fill"
        disabled
      >
        ボタン
      </button>
    </div>
    <div class="button-text-container" />
    <div class="button-text-container">
      <p>アウトライン</p>
      <button
        class="button-disable-outline"
        disabled
      >
        ボタン
      </button>
    </div>
    <div class="button-text-container" />
    <div class="button-text-end-container">
      <p>テキスト</p>
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
  border: 0.2rem solid #0055AD;
  border-radius: 0.5rem;
  background-color: #97D3FF;
}

.button-fill-1:active {
  background-color: #008BF2;
}

.button-fill-2 {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #0055AD;
  border-radius: 0.5rem;
  background-color: #97D3FF;
}

.button-fill-2:active {
  background-color: #008BF2;
}

.button-outline-1 {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #0055AD;
  border-radius: 0.5rem
}

.button-outline-1:active {
  background-color: #CCC;
}

.button-outline-2 {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #0055AD;
  border-radius: 0.5rem
}

.button-outline-2:active {
  background-color: #CCC;
}

.button-text-1 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem
}

.button-text-1:active {
  background-color: #CCC;
}

.button-text-2 {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  text-decoration-line: underline;
  text-underline-offset: 0.2rem
}

.button-text-2:active {
  background-color: #CCC;
}

.button-disable-fill {
  padding: 1rem 2.4rem;
  border-radius: 0.5rem;
  color: #FFF;
  background-color: #CCC;
  cursor: default
}

.button-disable-outline {
  padding: 1rem 2.4rem;
  border: 0.2rem solid #B3B3B3;
  border-radius: 0.5rem;
  color: #B3B3B3;
  cursor: default
}

.button-disable-text {
  padding: 1rem 2.4rem;
  color: 0.2rem solid #B3B3B3;
  cursor: default
}

@media (hover :hover){
  .button-fill-1:hover {
    background-color: #57B8FF;
  }

  .button-fill-2:hover {
    background-color: #57B8FF;
    text-decoration-line: underline;
    text-underline-offset: 0.2rem;
  }

  .button-outline-1:hover {
    background-color: #E6E6E6
  }

  .button-outline-2:hover {
    background-color: #E6E6E6;
    text-decoration-line: underline;
    text-underline-offset: 0.2rem;
  }

  .button-text-1:hover {
    background-color: #E6E6E6;
  }

  .button-text-2:hover {
    background-color: #E6E6E6;
  }
}
</style>
