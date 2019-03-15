const colors = require('./colors')

let screens = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
}

let textSizes = {
  xs: '.75rem', // 12px
  sm: '.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem' // 48px
}

module.exports = {
  baseDuration: '150ms',
  baseTiming: 'ease',
  baseBorderColor: colors.lightGray,
  baseBorder: `1px solid ${colors.lightGray}`
}
