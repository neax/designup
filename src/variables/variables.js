import colors from './colors'
import spacing from './spacing'
import fonts from './fonts'
import globalVariables from './global'
import themes from './themes'

module.exports = function(options) {
  const colorSchemes = {}

  for (let theme in themes) {
    colorSchemes[`${theme}-primary`] = themes[theme].primary
    colorSchemes[`${theme}-secondary`] = themes[theme].secondary
  }

  const variablesCamelCase = Object.assign(
    {},
    colors,
    globalVariables,
    fonts,
    spacing,
    colorSchemes,
    themes[options.theme]
  )
  const variablesHypenCase = {}
  for (let variable in variablesCamelCase) {
    variablesHypenCase[variable.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()] =
      variablesCamelCase[variable]
  }

  return variablesHypenCase
}
