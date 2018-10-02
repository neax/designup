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
      preserve: false,
      importFrom: [
        {
          customProperties: require('./../src/variables/variables')({
            theme: moduleOptions.theme || 'blue'
          }),
          customMedia: require('./../src/variables/custom-media')
        }
      ],
      features: {
        'color-mod-function': {
          unresolved: 'ignore'
        }
      }
    })
  )
  this.options.css.push(path.resolve(__dirname, '../src/styles/modules.css'))
}

module.exports.meta = require('./../package.json')
