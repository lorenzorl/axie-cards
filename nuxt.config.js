import cards from './data/cards'
import i18n from './config/i18n'

export default {
  server: {
    host: '0.0.0.0',
    port: '3000'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'axies-cards',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'icon.png'
    },
    meta: {
      name: 'Cartas de Axie Infinity',
      author: 'lorenzorangel22@gmail.com',
      description: 'Cartas de Axie Infinity en Español.',
      theme_color: '#2f2e3c',
      lang: 'es'
    },
    manifest: {
      name: 'Cartas de Axie Infinity',
      short_name: 'Cartas Axie',
      description: 'Cartas de Axie Infinity en Español.',
      background_color: '#2f2e3c',
      lang: 'es',
    },
    workbox: {
      offlineAssets: [
        '/bg-aquatic.png' ,
        '/bg-beast.png' ,
        '/bg-bug.png' ,
        '/bg-bird.png' ,
        '/bg-plant.png' ,
        '/bg-reptile.png' ,
        '/favicon.ico' ,
        '/icon-atk.png' ,
        '/icon-def.png' ,
        '/icon.png',
        '/_nuxt/fonts/ChangaOne-Regular.78c9d6c.ttf',
        '/_nuxt/fonts/Poppins-Regular.8081832.ttf'
      ],
      runtimeCaching: [
        {
          urlPattern: 'https://storage.googleapis.com/axie-cdn/game/cards/base/.*',
          handler: 'CacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        },
        {
          urlPattern: 'https://storage.googleapis.com/axie-cdn/game/cards/effect-icons/.*',
          handler: 'CacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        }
      ]
    }
  },
  i18n: {
    strategy: 'no_prefix',
    locales: ['en', 'es'],
    defaultLocale: 'es',
    vueI18n: i18n
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
