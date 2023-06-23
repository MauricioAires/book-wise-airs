import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray-800',
    color: '$gray-100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
