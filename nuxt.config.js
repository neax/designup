import customMedia from './src/variables/custom-media'

export default {
  head: {
    title: 'Designup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.neax.io/assets/neax-fonts.css' }
    ]
  },
  plugins: ['~/lib/plugins/font-awesome.js'],
  css: ['~/css/main.css'],
  build: {
    postcss: [
      require('postcss-preset-env')({
        stage: 0,
        features: {
          'custom-properties': {
            preserve: false,
            variables: require('./src/variables/variables')({ theme: 'green' })
          },
          'custom-media-queries': {
            extensions: customMedia
          }
        }
      })
    ]
  }
}
