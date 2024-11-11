<script setup lang="ts">
</script>

<template>
  <nav class="nav">
    <ul class="ul">
      <h2 class="h2">
        概要
      </h2>
      <li>
        <NuxtLink
          to="/"
          class="li"
        >
          <p>はじめる</p>
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            style="display: block; height: 1.6rem; width: 1.6rem;"
          />
        </NuxtLink>
      </li>
    </ul>
    <ul class="ul">
      <h2 class="h2">
        コンポーネント
      </h2>
      <li>
        <NuxtLink
          to="/button"
          class="li"
        >
          <p>ボタン</p>
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            style="display: block; height: 1.6rem; width: 1.6rem;"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/skeleton"
          class="li"
        >
          <p>スケルトン</p>
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            style="display: block; height: 1.6rem; width: 1.6rem;"
          />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 4.8rem;
  left: 0;
  overflow: auto;
  width: 0;
  max-height: calc(100dvh - 4.8rem);
  background-color: transparent;
}

.h2 {
  color: #1A1A1A;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 0.1rem solid #7F7F7F;
}

.li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1A1A1A;
  padding: 1rem 1rem 1rem 2.5rem;
  border-radius: 1rem;
  cursor: pointer;
  }

@media (hover :hover){
  .li:hover {
    background-color: rgb(255 255 255 / 50%)
  }
}

.li:active {
  background-color: rgb(255 255 255 / 35%)
}

@media (width >= 960px) {
 .nav {
  width: 30rem;
 }
}
</style>
