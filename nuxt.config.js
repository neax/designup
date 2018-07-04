export default {
  head: {
    title: 'Musicup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.neax.io/assets/neax-fonts.css' }
    ]
  },
  css: ['~/css/main.css'],
  build: {
    postcss: [
      // require('postcss-import')(),
      require('postcss-preset-env')({
        stage: 0,
        features: {
          'custom-properties': {
            preserve: false,
            variables: require('./src/variables')({ theme: 'red' })
          }
        }
      })
    ]
  }
}
