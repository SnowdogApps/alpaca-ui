const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  const buttons = {
    '.btn': {
      padding: `0 ${theme('spacing.4')}`,
      height: `${theme('height.12')}`,
      fontWeight: `${theme('fontWeight.medium')}`,
      textTransform: 'uppercase',
      width: 'auto',
      transition: 'all 0.3s ease-in-out',
      '&:focus': {
        outline: `2px solid ${theme('colors.blue')}`,
        outlineOffset: '-1px'
      }
    },
    '.btn--primary': {
      backgroundColor: `${theme('backgroundColor.dark')}`,
      color: `${theme('colors.white')}`,
      '&:hover': {
        backgroundColor: `${theme('backgroundColor.primary')}`,
        color: `${theme('textColor.primary')}`
      }
    },
    '.btn--secondary': {
      backgroundColor: `${theme('backgroundColor.primary')}`,
      color: `${theme('textColor.primary')}`,
      border: `2px solid ${theme('borderColor.dark')}`,
      '&:hover': {
        backgroundColor: `${theme('backgroundColor.dark')}`,
        color: `${theme('colors.white')}`
      }
    },
    '.btn--fluid': {
      width: '100%'
    }

  }
  addComponents(buttons)
})
