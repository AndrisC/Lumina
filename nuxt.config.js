export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lumina',
    htmlAttrs: {
      lang: 'en'
    },
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
    '@/assets/main.css'
  ],
  styleResources: {
    scss: [
      '@/assets/tokens/border-radius.scss',
      '@/assets/tokens/color.scss',
      '@/assets/tokens/font-size.scss',
      '@/assets/tokens/opacity.scss',
      '@/assets/tokens/spacing.scss',
      '@/assets/tokens/timing.scss',
      '@/assets/tokens/z-index.scss',
      '@/assets/tokens/box-shadow.scss',
      '@/assets/mixins/_mixins.scss',
      '@/assets/main.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/API', ssr: false},
    {src: '~/plugins/axios', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:6969'
    baseURL: 'https://myviapan.ratior.hu:6970'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
