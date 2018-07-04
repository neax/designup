import colors from './colors'
import themes from './themes'

module.exports = function(options) {
  const typography = {
    'base-font-family': 'proximasoft, sans-serif'
  }
  return Object.assign({}, colors, typography, themes(options.theme))
}
