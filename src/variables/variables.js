const colors = require('./colors')
const spacing = require('./spacing')
const fonts = require('./fonts')
const globalVariables = require('./global')
const themes = require('./themes')

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
