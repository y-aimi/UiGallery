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
  app: {
    /* 共通トランジション */
    pageTransition: { name: 'page', mode: 'out-in' },
  },
});
