<script setup>
import { ref } from 'vue';

const price = ref(9.99);
console.log(price.value);

const message = ref('<h1>Hello</h1>');
const vueURL = ref('https://vuejs.org');
const vueId = ref('vue-link');
const count = ref(0);
const countUp = (event, times) => {
  count.value = event.clientX * times;
};
const eventName = 'keyup';
const userInput = ref('');

const score = ref(0);
const evaluation = computed(() => {
  return score.value > 3 ? 'Good' : 'Bad';
});

const watchCount = ref(0);
// watchは第一引数の値を監視したい時に使う。いわゆるuseEffectの依存配列で一部のstateを指定する場合
// watchCountのnewValue, oldValueが同値だった場合は第2引数は呼ばれない
watch(watchCount, (newValue, oldValue) => {
  console.log('watch');
  console.log('newValue', newValue);
  console.log('oldValue', oldValue);
}, {
  immediate: true, // 初回も第2引数を実行するかどうか
});
// watchEffectはいわゆるuseEffectの依存配列が全てのstateである場合
watchEffect(() => {
  console.log('watchCount', watchCount.value);
  setTimeout(() => {
    console.log('after 1 second');
  }, 1000);
  console.log(watchCount.value); // このアクセスがないと実行されない
});

// styleについて
const isRed = ref(true);
const isBgBlue = ref(true);
const toggleStyle = () => {
  isRed.value = !isRed.value;
  isBgBlue.value = !isBgBlue.value;
};
const className = ref('red');
</script>

<template>
  <div>
    <h1>Welcome to the ああああ</h1>
    <div v-html="message" />
    <a v-bind="{ id: vueId, href: vueURL }">Vue.js</a>
    <p>{{ count }}</p>
    <button @click="count = $event.clientX">
      button
    </button>
    <button @click="countUp($event, 5)">
      button
    </button>
    <button @click.stop="count = 30">
      button
    </button>
    <a
      href="https://vuejs.org"
      @click.prevent
    >Vueに行かないよ</a>
    <input
      type="text"
      @[eventName].space.delete="count++"
    >
    <p>{{ userInput }}</p>
    <input
      v-model="userInput"
      type="text"
    >
    <p>{{ evaluation }}</p>
    <p>{{ score }}</p>
    <button @click="score++">
      +1
    </button>
    <p>{{ watchCount }}</p>
    <button @click="watchCount++">
      +watchCount
    </button>
    <div :class="{ 'red': isRed, 'bg-blue': isBgBlue }">
      Hello
    </div>
    <div
      class="border"
      :class="[className, { 'bg-blue': isBgBlue }]"
    >
      Hello
    </div>
    <button @click="toggleStyle">
      toggle style
    </button>
    <div
      style=""
      :style="{ color: 'red', backgroundColor: 'green' }"
    >
      styleです
    </div>
  </div>
</template>

<style>
.red {
  color: red
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 1px solid red
}
</style>

<!-- ref()とreactive()どちらを使うか？ -->
<!-- refオブジェクトにvalueが自動的に付くかどうかは先頭の値がrefオブジェクトかどうかで判断される -->
<!-- <div v-text="count"></div> のv-textなどの特別なvue属性のことをディレクティブという -->
<!-- v-on→@, v-bind:→:に省略される -->
<!-- 関数呼び出しを使うかcomputedを使うかはcomputedを使う。reactでいう通常の関数定義とuseMemoやuseEffectの依存配列的な感じで無駄なレンダリングが走らないようになる -->
<!-- computedはあくまで処理をまとめる役割で、使われなかったら実行されないし副作用を含めてはいけない -->
