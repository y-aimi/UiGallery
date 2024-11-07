export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image'],
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
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js',
          defer: true,
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js',
          defer: true,
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-css.min.js',
          defer: true,
        },
      ],
    },
  },
});