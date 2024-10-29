<template>
  <div>
    <header>
      <GlobalNavi />
    </header>
    <main>
      <slot />
    </main>
    <!-- <footer>
      <TheFooter />
    </footer> -->
  </div>
</template>

<style>
html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 62.5%;
}
header, main,footer {
  font-size: 1.6rem;

}
main {
  margin: 1.6rem;
}
</style>
