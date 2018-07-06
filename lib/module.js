const path = require('path')

module.exports = function DesignupModule(moduleOptions) {
  this.addPlugin(path.resolve(__dirname, './plugins/font-awesome.js'))
  this.addPlugin(path.resolve(__dirname, './plugins/plugin.js'))
  this.options.css.push('normalize.css/normalize.css')

  if (!Array.isArray(this.options.build.postcss)) {
    this.options.build.postcss = []
  }

  this.options.build.postcss.push(
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'custom-properties': {
          preserve: false,
          variables: require('./../src/variables/variables')({
            theme: moduleOptions.theme || 'blue'
          })
        },
        'custom-media-queries': {
          extensions: require('./../src/variables/custom-media')
        }
      }
    })
  )
  this.options.css.push(path.resolve(__dirname, '../src/styles/modules.css'))
}

module.exports.meta = require('./../package.json')
