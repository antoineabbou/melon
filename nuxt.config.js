import path from 'path'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Melon | Starter - Nuxt.js | Creative development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Melon | Starter - Nuxt.js | Creative development' },
      { name: 'theme-color', content: '#1A1A1A' },
      { name: 'msapplication-TileColor', content: '#1A1A1A' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      {
        hid: `og:title`,
        property: 'og:title',
        content: 'Melon | Starter - Nuxt.js | Creative development'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Melon is a nuxt.js starter for creative development, using Three, Pixi, SmoothScroll and i18n, made by Antoine Abbou ✌️'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Melon | Starter - Nuxt.js | Creative development'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://github.com/antoineabbou/creative-starter-nuxt'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '630'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ''
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Melon | Starter - Nuxt.js | Creative development'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'Melon | Starter - Nuxt.js | Creative development'
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: ''
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: ''
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~/assets/styles/main.styl',
      lang: 'stylus'
    }
  ],
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: [
      '/',
      '/about',
      // English
      '/en/',
      '/en/about'
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/components.js',
    '~/plugins/i18n.js',
    {
      src: '~/plugins/three',
      ssr: false
    },
    {
      src: '~/plugins/pixi',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    'nuxt-payload-extractor'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'

      config.module.rules.push({
        test: /\.(glsl|vs|fs)$/,
        loader: 'raw-loader'
      })

      const stylusRules = config.module.rules.find(
        rule => rule.test.toString().indexOf('styl') > -1
      )
      if (stylusRules && Array.isArray(stylusRules.oneOf)) {
        stylusRules.oneOf.forEach((one) => {
          if (Array.isArray(one.use)) {
            one.use.forEach((u) => {
              if (u.loader === 'stylus-loader') {
                const stylusOptions = u.options
                stylusOptions.paths = [path.resolve('./assets/styles')]

                stylusOptions.import = [
                  '~rupture/rupture/index.styl',
                  'base/index.styl'
                ]
              }
            })
          }
        })
      }
    }
  }
}
