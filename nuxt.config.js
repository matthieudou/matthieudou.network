module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CV - Matthieu d’Oultremont',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#4E8FD6'},
      { hid: 'description', name: 'description', content: 'Site de Matthieu d’Oultremont: CV' },
      // OG TAGS
      { hid: 'og:url', poperty: 'og:url', content: 'https://matthieudou.network'},
      { hid: 'og:type', poperty: 'og:type', content: 'website'},
      { hid: 'og:title', poperty: 'og:title', content: 'Site de Matthieu d’Oultremont: CV'},
      { hid: 'og:description', poperty: 'og:description', content: 'Site de Matthieu d’Oultremont: CV'},
      { hid: 'og:image', poperty: 'og:image', content: 'https://matthieudou.network/profil.jpg'},
      // TWITTER TAGS
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Site de Matthieu d’Oultremont: CV'},
      { hid: 'twitter:description', name: 'twitter:description', content: 'Site de Matthieu d’Oultremont: CV'},
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://matthieudou.network/profil.jpg'},
      // GOOGLE TAGS
      { hid: 'google:name', itemprop: 'name', content: 'Site de Matthieu d’Oultremont: CV'},
      { hid: 'google:description', itemprop: 'description', content: 'Site de Matthieu d’Oultremont: CV'},
      { hid: 'google:image', itemprop: 'image', content: 'https://matthieudou.network/profil.jpg'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },
  css: [
    '~/assets/styles/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    {src: '~/plugins/svg-icon.js'}
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}