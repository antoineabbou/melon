import path from 'path'
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'Melon | Starter nuxt.js | Creative development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Melon | Starter nuxt.js | Creative development" },
      { name: 'theme-color', content: '#1A1A1A' },
      { name: 'msapplication-TileColor', content: '#1A1A1A' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      {
        hid: `og:title`,
        property: 'og:title',
        content: 'Melon | Starter nuxt.js | Creative development'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Melon is a nuxt.js starter for creative development, using Three, Pixi, SmoothScroll and i18n, made by Antoine Abbou ✌️"
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Melon | Starter nuxt.js | Creative development'
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
        content: 'Melon | Starter nuxt.js | Creative development'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: "Melon | Starter nuxt.js | Creative development"
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
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'mask-icon', color: '#1A1A1A', href: '/favicons/safari-pinned-tab.svg' },
      { rel: 'manifest', href: '/assets/favicons/manifest.webmanifest', crossorigin: "use-credentials" }
    ],
    script: []
  },
  modules: [
  ],

  env: {
    API_URL: process.env.API_URL || '',
    BASE_URL: process.env.BASE_URL || '',
    NAME_ENV: process.env.NAME_ENV || 'PROD starter nuxtJS'
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffffff' },
  css: [
    {src: '~/assets/stylus/main.styl', lang: 'stylus'}
  ],
  router: {
    middleware: 'i18n',
  },
  plugins: [
    '~/plugins/i18n.js',
    {
      src: '~/plugins/pixi',
      ssr: false
    },
    {
      src: '~/plugins/three',
      ssr: false
    }
  ],
  generate: {
    routes: []
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const stylusRules = config.module.rules.find(rule => rule.test.toString().indexOf("styl") > -1)
      if(stylusRules && Array.isArray(stylusRules.oneOf)) {
        stylusRules.oneOf.forEach(one => {
          if (Array.isArray(one.use)) {
            one.use.forEach(u => {
              if (u.loader == "stylus-loader") {
                const stylusOptions = u.options;
                stylusOptions.paths = [
                  path.resolve('./assets/stylus')
                ]

                stylusOptions.import = [
                  '~rupture/rupture/index.styl',
                  'base/index.styl'
                ]
              }
            });
          }
        });
      }

      vendor: ['pixi.js', 'three.js']

    }

  }
}
