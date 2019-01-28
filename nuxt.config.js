export default {
  head: {
    title: 'Designup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'stylesheet', type: 'text/css', href: '//cdn.neax.io/assets/neax-fonts.css' }]
  },
  plugins: ['~/lib/plugins/font-awesome.js'],
  css: ['~/css/main.css'],
  build: {
    postcss: [
      require('postcss-preset-env')({
        stage: 0,
        preserve: false,
        importFrom: [
          {
            customProperties: require('./src/variables/variables')({ theme: 'green' }),
            customMedia: require('./src/variables/custom-media')
          }
        ],
        features: {
          'color-mod-function': {
            unresolved: 'ignore'
          },
          'focus-within-pseudo-class': {
            preserve: true
          }
        }
      })
    ]
  }
}
