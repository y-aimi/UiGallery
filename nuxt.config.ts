export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@vite-pwa/nuxt'],
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
  pwa: {
    registerType: 'autoUpdate', // 自動更新
    includeAssets: ['favicon.ico'],
    client: {
      installPrompt: true,
    }, // PWAインストールのプロンプトを表示する
    manifest: {
      name: 'UI Gallery',
      description: 'UI\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u304c\u78ba\u8a8d\u3067\u304d\u308b\u30ae\u30e3\u30e9\u30ea\u30fc\u30b5\u30a4\u30c8\u3067\u3059',
      theme_color: '#ffffff',
      lang: 'ja',
      short_name: 'UI\u30ae\u30e3\u30e9\u30ea\u30fc',
      start_url: '/',
      display: 'fullscreen',
      background_color: '#ffffff',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: null,
    },
    devOptions: {
      enabled: false, // 開発環境は無効化
      type: 'module',
    },
  },
});
