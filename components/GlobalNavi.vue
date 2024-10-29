<template>
  <nav>
    <h1>
      <NuxtLink to="/">
        UIギャラリー
      </NuxtLink>
    </h1>
    <ul>
      <li>
        <NuxtLink to="/">
          ホーム
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          about
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  gap: 2.4rem;
  align-items: center;
  padding: 1.6rem;
  background-color: lightcyan;
}

ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  text-decoration: underline;
}
</style>
