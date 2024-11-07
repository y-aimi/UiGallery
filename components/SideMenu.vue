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
  width: 30rem;
  max-height: calc(100dvh - 4.8rem);
  background-color: #FFF;
}

.h2 {
  color: #1A1A1A;
  font-weight: bold;
  margin-top: 1rem;
  border-bottom: 0.2rem solid #F2F2F2
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

.li:active {
  background-color: #E6E6E6
}

@media (hover :hover){
  .li:hover {
    background-color: #F2F2F2
  }
}
</style>
