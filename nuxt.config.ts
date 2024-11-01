export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['@/assets/style/reset.css'],
  eslint: {
    config: {
      stylistic: {
        indent: 2, // インデントはスペース2
        quotes: 'single', // クオートはシングル
        semi: true,
      },
    },
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
    ],
  },
  app: {
    /* 共通トランジション */
    pageTransition: { name: 'page', mode: 'out-in' },
  },
});
